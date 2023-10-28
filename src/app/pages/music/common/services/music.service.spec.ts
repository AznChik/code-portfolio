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
    it('should call updateCount() when action = decrease', () => {
      spyOn(MusicService, 'updateCount');
      MusicService.updateCart('decrease', 'id');
      expect(MusicService.updateCount).toHaveBeenCalledWith('decrease', 'id');
    });

    it('should call updateCount() when action = increase', () => {
      spyOn(MusicService, 'updateCount');
      MusicService.updateCart('increase', 'id');
      expect(MusicService.updateCount).toHaveBeenCalledWith('increase', 'id');
    });

    it('should call addRemove() when action = add', () => {
      spyOn(MusicService, 'addRemove');
      MusicService.updateCart('add', 'id');
      expect(MusicService.addRemove).toHaveBeenCalledWith('add', 'id');
    });

    it('should call addRemove() when action = remove', () => {
      spyOn(MusicService, 'addRemove');
      MusicService.updateCart('remove', 'id');
      expect(MusicService.addRemove).toHaveBeenCalledWith('remove', 'id');
    });
  });

  describe('updateCount()', () => {
    describe('action = decrease', () => {
      it('should decrease item count, cart total, set item cost, and call updateStock() when item count > 1', () => {
        spyOn(MusicService, 'updateStock');
        const maxItem: Item = { ...item, count: 5 };
        MusicService.cart = { items: [maxItem], total: (5 * product.cost) };
        MusicService.updateCount('decrease', maxItem.id);
        expect(maxItem.count).toEqual(4);
        expect(maxItem.cost).toEqual(maxItem.count * product.cost);
        expect(MusicService.cart.total).toEqual((5 * product.cost) - product.cost);
        expect(MusicService.updateStock).toHaveBeenCalledWith('increase', product);
      });

      it('should call addRemove() when item count = 1', () => {
        spyOn(MusicService, 'addRemove');
        MusicService.cart = fullCart;
        MusicService.updateCount('decrease', item.id);
        expect(MusicService.addRemove).toHaveBeenCalledWith('remove', item.id);
      });
    });

    it('should increase item count, cart total, set item cost, and call updateStock() when action = increase', () => {
      spyOn(MusicService, 'updateStock');
      MusicService.cart = { items: [item], total: product.cost };
      MusicService.updateCount('increase', item.id);
      expect(item.count).toEqual(2);
      expect(item.cost).toEqual(2 * product.cost);
      expect(MusicService.cart.total).toEqual(2 * product.cost);
      expect(MusicService.updateStock).toHaveBeenCalledWith('decrease', product);
    });
  });

  describe('addRemove()', () => {
    it('should call updateStock(), increase cart total, and add product to cart when action = add', () => {
      spyOn(MusicService, 'updateStock');
      MusicService.cart = emptyCart;
      MusicService.updateCart('add', product.id);
      expect(MusicService.updateStock).toHaveBeenCalledWith('decrease', product);
      expect(MusicService.cart.total).toEqual(product.cost);
      expect(MusicService.cart.items).toContain({
        cost: product.cost,
        count: 1,
        currency: '',
        id: product.id,
        image: product.image,
        name: product.name
      });
    });

    it('should set product stock to 5, product added to false, decrease cart total, remove product from cart, and call updateBorders() when action = remove', () => {
      spyOn(MusicService, 'updateBorders');
      MusicService.cart = { items: [item], total: item.cost };
      MusicService.updateCart('remove', product.id);
      expect(product.stock).toEqual(5);
      expect(product.added).toBe(false);
      expect(MusicService.updateBorders).toHaveBeenCalledWith(product);
      expect(MusicService.cart.total).toEqual(0);
      expect(MusicService.cart.items).not.toContain({
        cost: product.cost,
        count: 1,
        currency: '',
        id: product.id,
        image: product.image,
        name: product.name
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
        const noProduct: Product = { ...product, stock: 0 };
        MusicService.updateStock('decrease', noProduct);
        expect(noProduct.stock).toEqual(0);
        expect(noProduct.added).toBe(true);
      });
    });

    describe('action = increase', () => {
      it('should add 1 to product stock and set product added to true when stock < 5', () => {
        const partialProduct: Product = { ...product, stock: 3 };
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

  //   it('should add out class to product when its stock = 0', () => {
  //     const noProduct: Product = { ...product, stock: 0 };
  //     element.querySelector('#Bagpipes').classList.remove('out');
  //     MusicService.updateBorders(noProduct);
  //     expect(element.querySelector('#Bagpipes').classList).toContain('out');
  //   });

  //   it('should remove added and out classes from product when its stock = 5', () => {
  //     const maxProduct: Product = { ...product, stock: 5 };
  //     element.querySelector('#Bagpipes').classList.add('added');
  //     element.querySelector('#Bagpipes').classList.add('out');
  //     MusicService.updateBorders(maxProduct);
  //     expect(element.querySelector('#Bagpipes').classList).not.toContain('added');
  //     expect(element.querySelector('#Bagpipes').classList).not.toContain('out');
  //   });

  //   it('should remove out class and add added class to product when its stock != 0 or 5', () => {
  //     const partialProduct: Product = { ...product, stock: 3 };
  //     element.querySelector('#Bagpipes').classList.add('out');
  //     element.querySelector('#Bagpipes').classList.remove('added');
  //     MusicService.updateBorders(partialProduct);
  //     expect(element.querySelector('#Bagpipes').classList).not.toContain('out');
  //     expect(element.querySelector('#Bagpipes').classList).toContain('added');
  //   });
  // });
});
