import { Injectable } from '@angular/core';

import { Cart, Item, Product, Stock } from '../models';

@Injectable({ providedIn: 'root' })
export class MusicService {
  static cart: Cart;
  static stock: Stock;

  static updateCart(action: string, id: string): void {
    (action === 'decrease' || action === 'increase') && this.updateCount(action, id);
    (action === 'add' || action === 'remove') && (this.addRemove(action, id));
  }

  static updateCount(action: string, id: string): void {
    const instrumentProduct: Product | undefined = this.stock.instruments.find((instrument) => instrument.id === id);
    const vinylProduct: Product | undefined = this.stock.vinyls.find((vinyl) => vinyl.id === id);
    const stockProduct: Product | undefined = instrumentProduct ? instrumentProduct : vinylProduct;
    const cartItem: Item | undefined = this.cart.items.find((cartItem) => cartItem.id === id);

    if (cartItem && stockProduct) {
      switch (action) {
        case 'decrease':
          if (cartItem.count > 1) {
            cartItem.count -= 1;
            cartItem.cost = cartItem.count * stockProduct.cost;
            this.cart.total -= stockProduct.cost;
            this.updateStock('increase', stockProduct);
          } else {
            this.addRemove('remove', id);
          }
          break;
        case 'increase':
          cartItem.count += 1;
          cartItem.cost = cartItem.count * stockProduct.cost;
          this.cart.total += stockProduct.cost;
          this.updateStock('decrease', stockProduct);
      }
    }
  }

  static addRemove(action: string, id: string): void {
    const instrumentProduct: Product | undefined = this.stock.instruments.find((instrument) => instrument.id === id);
    const vinylProduct: Product | undefined = this.stock.vinyls.find((vinyl) => vinyl.id === id);
    const stockProduct: Product | undefined = instrumentProduct ? instrumentProduct : vinylProduct;
    const cartItem: Item | undefined = this.cart.items.find((cartItem) => cartItem.id === id);

    if (stockProduct) {
      switch (action) {
        case 'add':
          this.updateStock('decrease', stockProduct);
          this.cart.total += stockProduct.cost;
          this.cart.items.push({
            cost: stockProduct.cost,
            count: 1,
            currency: '',
            id: stockProduct.id,
            image: stockProduct.image,
            name: stockProduct.name
          });
          break;
        case 'remove':
          if (cartItem) {
            stockProduct.stock = 5;
            stockProduct.added = false;
            this.cart.total -= (cartItem.count * stockProduct.cost);
            this.cart.items = this.cart.items.filter((item) => item.id != id);
            this.updateBorders(stockProduct);
          }
      }
    }
  }

  static updateStock(action: string, product: Product): void {
    switch (action) {
      case 'decrease':
        (product.stock > 0) && (product.stock -= 1);
        product.added = true;
        break;
      case 'increase':
        (product.stock < 5) && (product.stock += 1);
        (product.stock === 5) && (product.added = false);
      }
    this.updateBorders(product);
  }

  static updateBorders(product: Product): void {
    switch(product.stock) {
      case 0:
        document.getElementById(product.id)?.classList.add('out');
        break;
      case 5:
        document.getElementById(product.id)?.classList.remove('added');
        document.getElementById(product.id)?.classList.remove('out');
        break;
      default:
        document.getElementById(product.id)?.classList.remove('out');
        document.getElementById(product.id)?.classList.add('added');
    }
  }
}
