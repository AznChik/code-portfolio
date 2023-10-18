import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockComponent } from './stock.component';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockComponent]
    });
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('toProduct()', () => {
    it('should set chosenProduct to selection and showProduct to true', () => {
      component.chosenProduct = '';
      component.showProduct = false;
      component.toProduct('test');
      expect(component.chosenProduct).toEqual('test');
      expect(component.showProduct).toBe(true);
    });
  });
});
