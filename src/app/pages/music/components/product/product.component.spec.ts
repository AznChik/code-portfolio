import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fullStock } from '../../common/data/stocks';
import { Stock } from '../../common/models';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let stock: Stock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent]
    });
    fixture = TestBed.createComponent(ProductComponent);
    stock = fullStock;
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    it('should set items to instrument stock when chosenProduct = instrument', () => {
      component.chosenProduct = 'instrument';
      component.ngOnInit();
      expect(component.items).toEqual(stock.instruments);
    });

    it('should set items to vinyl stock when chosenProduct = vinyl', () => {
      component.chosenProduct = 'vinyl';
      component.ngOnInit();
      expect(component.items).toEqual(stock.vinyls);
    });

    it('should call formatCost() for each item', () => {
      spyOn(component, 'formatCost');
      component.items = stock.instruments;
      component.ngOnInit();
      expect(component.formatCost).toHaveBeenCalledTimes(stock.instruments.length);
    });
  });

  describe('formatCost()', () => {
    it('should format item cost into currency', () => {
      const item = stock.instruments[0];
      component.formatCost(item);
      expect(item.currency).toEqual('$103.32');
    });
  });
});
