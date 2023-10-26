import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { instrumentCart } from '../../common/data/carts';
import { instrumentItems } from '../../common/data/items';
import { Item } from '../../common/models';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent]
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should call setDesktopView()', () => {
      spyOn(component, 'setDesktopView');
      component.ngOnInit();
      expect(component.setDesktopView).toHaveBeenCalled();
    });
  });

  describe('setDesktopView()', () => {
    it('should call setDesktopView() when window is resized', () => {
      spyOn(component, 'setDesktopView');
      window.dispatchEvent(new Event('resize'));
      expect(component.setDesktopView).toHaveBeenCalled();
    });

    it('should set desktopView to true when window screen width > 640', () => {
      spyOnProperty(window.screen, 'width').and.returnValue(641);
      window.dispatchEvent(new Event('resize'));
      expect(component.desktopView).toBe(true);
    });

    it('should set desktopView to false when window screen width = 640', () => {
      spyOnProperty(window.screen, 'width').and.returnValue(640);
      window.dispatchEvent(new Event('resize'));
      expect(component.desktopView).toBe(false);
    });

    it('should set desktopView to false when window screen width < 640', () => {
      spyOnProperty(window.screen, 'width').and.returnValue(639);
      window.dispatchEvent(new Event('resize'));
      expect(component.desktopView).toBe(false);
    });
  });

  describe('toggleCart()', () => {
    it('should call calculateCost()', () => {
      spyOn(component, 'calculateCost');
      component.toggleCart('test');
      expect(component.calculateCost).toHaveBeenCalled();
    });

    it('should show cart when action = open', () => {
      const dialog = document.querySelector('dialog') as HTMLDialogElement;
      spyOn(dialog, 'showModal');
      component.toggleCart('open');
      expect(dialog.showModal).toHaveBeenCalled();
    });

    it('should close cart when action != open', () => {
      const dialog = document.querySelector('dialog') as HTMLDialogElement;
      spyOn(dialog, 'close');
      component.toggleCart('close');
      expect(dialog.close).toHaveBeenCalled();
    });
  });

  describe('calculateCost()', () => {
    it('should set currency for each cart item', () => {
      const item: Item = { ...instrumentItems[0], count: 3 };
      component.cart = { items: [item], total: 309.96 };
      component.calculateCost();
      expect(item.cost).toEqual(309.96);
      expect(item.currency).toEqual('$309.96');
    });

    it('should format cart total into currency', () => {
      component.cart = instrumentCart;
      component.displayedTotal = '';
      component.calculateCost();
      expect(component.displayedTotal).toEqual('$75,093.62');
    });
  });
});
