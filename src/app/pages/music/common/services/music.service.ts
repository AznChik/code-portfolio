import { Injectable } from '@angular/core';

import { Cart, Product, Stock } from '../models';

@Injectable({ providedIn: 'root' })
export class MusicService {
  static cart: Cart;
  static stock: Stock;

  static updateCart(action: string, product: Product): void {
    switch (action) {
      case 'add':
        this.updateStock('decrease', product);
        this.cart.total += product.cost;
        this.cart.items.push({
          cost: product.cost,
          count: 1,
          currency: '',
          id: product.id,
          image: product.image,
          name: product.name
        });
        break;
      case 'remove':
        this.updateStock('increase', product);
        this.cart.total -= product.cost;
        this.cart.items = this.cart.items.filter((cartItem) => cartItem.id != product.id);
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
