import { TestBed } from '@angular/core/testing';

import { emptyCart, fullCart } from '../data/carts';
import { instrumentData } from '../data/instruments';
import { instrumentItems } from '../data/items';
import { fullStock } from '../data/stocks';
import { Item, Product } from '../models';
import { MusicService } from './music.service';

describe('MusicService', () => {
  let item: Item;
  let product: Product;
  let service: MusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    item = instrumentItems[0];
    product = instrumentData[0];
    MusicService.stock = fullStock;
    service = TestBed.inject(MusicService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  describe('updateCart()', () => {
    it('should call updateStock() and add product to cart when action = add', () => {
      spyOn(MusicService, 'updateStock');
      const updatedTotal = emptyCart.total + item.cost;
      MusicService.cart = emptyCart;
      MusicService.updateCart('add', product);
      expect(MusicService.updateStock).toHaveBeenCalledWith('decrease', product);
      expect(MusicService.cart.total).toEqual(updatedTotal);
      expect(MusicService.cart.items).toContain({
        cost: item.cost,
        count: 1,
        currency: '',
        id: item.id,
        image: item.image,
        name: item.name
      });
    });

    it('should call updateStock() and remove product from cart when action = remove', () => {
      spyOn(MusicService, 'updateStock');
      const updatedTotal = fullCart.total - item.cost;
      MusicService.cart = fullCart;
      MusicService.updateCart('remove', product);
      expect(MusicService.updateStock).toHaveBeenCalledWith('increase', product);
      expect(MusicService.cart.total).toEqual(updatedTotal);
      expect(MusicService.cart.items).not.toContain({
        cost: item.cost,
        count: 1,
        currency: '',
        id: item.id,
        image: item.image,
        name: item.name
      });
    });
  });

  describe('updateStock()', () => {
    it('should call updateBorders()', () => {
      spyOn(MusicService, 'updateBorders');
      MusicService.updateStock('action', product);
      expect(MusicService.updateBorders).toHaveBeenCalledWith(product);
    });

    describe('action = decrease', () => {
      it('should subtract 1 from product stock and set product added to true when stock > 0', () => {
        MusicService.updateStock('decrease', product);
        expect(product.stock).toEqual(4);
        expect(product.added).toBe(true);
      });

      it('should not subtract 1 from product stock and set product added to true when stock = 0', () => {
        const noProduct = { ...product, stock: 0 };
        MusicService.updateStock('decrease', noProduct);
        expect(noProduct.stock).toEqual(0);
        expect(noProduct.added).toBe(true);
      });
    });

    describe('action = increase', () => {
      it('should add 1 to product stock and set product added to true when stock < 5', () => {
        const partialProduct = { ...product, stock: 3 };
        MusicService.updateStock('increase', partialProduct);
        expect(partialProduct.stock).toEqual(4);
        expect(partialProduct.added).toBe(true);
      });

      it('should not add 1 to product stock and set product added to false when stock = 5', () => {
        MusicService.updateStock('increase', product);
        expect(product.stock).toEqual(5);
        expect(product.added).toBe(false);
      });
    });
  });

  // describe('updateBorders()', () => {
  //   let element: any;

  //   beforeEach(() => {
  //     element = fixture.debugElement.nativeElement;
  //     element.innerHTML += "<div id='Bagpipes'></div>";
  //   });

  //   it('should add out class to item when its stock = 0', () => {
  //     const noProduct: Product = { ...product, stock: 0 };
  //     element.querySelector('#Bagpipes').classList.remove('out');
  //     MusicService.updateBorders(noProduct);
  //     expect(element.querySelector('#Bagpipes').classList).toContain('out');
  //   });

  //   it('should remove added and out classes from item when its stock = 5', () => {
  //     const maxProduct: Product = { ...product, stock: 5 };
  //     element.querySelector('#Bagpipes').classList.add('added');
  //     element.querySelector('#Bagpipes').classList.add('out');
  //     MusicService.updateBorders(maxProduct);
  //     expect(element.querySelector('#Bagpipes').classList).not.toContain('added');
  //     expect(element.querySelector('#Bagpipes').classList).not.toContain('out');
  //   });

  //   it('should remove out class and add added class to item when its stock != 0 or 5', () => {
  //     const partialProduct: Product = { ...product, stock: 3 };
  //     element.querySelector('#Bagpipes').classList.add('out');
  //     element.querySelector('#Bagpipes').classList.remove('added');
  //     MusicService.updateBorders(partialProduct);
  //     expect(element.querySelector('#Bagpipes').classList).not.toContain('out');
  //     expect(element.querySelector('#Bagpipes').classList).toContain('added');
  //   });
  // });
});
