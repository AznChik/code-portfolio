import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { fullCart, instrumentCart } from '../../common/data/carts';
import { MusicService } from '../../common/services/music.service';

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
    it('should show cart and call formatAmounts() when action = open', () => {
      const dialog = document.querySelector('dialog') as HTMLDialogElement;
      spyOn(component, 'formatAmounts');
      spyOn(dialog, 'showModal');
      component.toggleCart('open');
      expect(dialog.showModal).toHaveBeenCalled();
      expect(component.formatAmounts).toHaveBeenCalled();
    });

    it('should close cart and set checkout to false when action != open', () => {
      const dialog = document.querySelector('dialog') as HTMLDialogElement;
      spyOn(dialog, 'close');
      component.checkout = true;
      component.toggleCart('close');
      expect(component.checkout).toBe(false);
      expect(dialog.close).toHaveBeenCalled();
    });
  });

  describe('formatAmounts()', () => {
    it('should call numberFormat() for each cart item and cart total', () => {
      spyOn(Intl, 'NumberFormat').and.callThrough();
      component.cart = fullCart;
      component.formatAmounts();
      expect(Intl.NumberFormat).toHaveBeenCalledTimes(fullCart.items.length + 1);
    });

    it('should format cart total into currency', () => {
      component.cart = instrumentCart;
      component.displayedTotal = '';
      component.formatAmounts();
      expect(component.displayedTotal).toEqual('$75,093.62');
    });
  });

  describe('updateCount()', () => {
    it('should call updateCart() & formatAmounts()', () => {
      spyOn(MusicService, 'updateCart');
      spyOn(component, 'formatAmounts');
      component.updateCount('action', 'id');
      expect(MusicService.updateCart).toHaveBeenCalledWith('action', 'id');
      expect(component.formatAmounts).toHaveBeenCalled();
    });
  });
});
