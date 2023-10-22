import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

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

  describe('toggleCart()', () => {
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
});
