import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sortOptions } from '../../common/constants';
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
    beforeEach(() => {
      component.items = [];
      component.sortOptions = [];
    });

    it('should set items & sortOptions for instruments when chosenProduct = instrument', () => {
      component.chosenProduct = 'instrument';
      component.ngOnInit();
      expect(component.items).toEqual(stock.instruments);
      expect(component.sortOptions).toEqual(sortOptions.instrument);
    });

    it('should set items & sortOptions for vinyls when chosenProduct = vinyl', () => {
      component.chosenProduct = 'vinyl';
      component.ngOnInit();
      expect(component.items).toEqual(stock.vinyls);
      expect(component.sortOptions).toEqual(sortOptions.vinyl);
    });

    it('should call formatCost() for each item', () => {
      spyOn(component, 'formatCost');
      component.items = stock.instruments;
      component.ngOnInit();
      expect(component.formatCost).toHaveBeenCalledTimes(stock.instruments.length);
    });

    it('should sort items by name in descending order', () => {
      spyOn(component.items, 'sort');
      component.items = stock.instruments;
      component.ngOnInit();
      expect(component.items[0].name).toEqual('Bagpipes');
    });
  });

  describe('formatCost()', () => {
    it('should format item cost into currency', () => {
      const item = stock.instruments[0];
      component.formatCost(item);
      expect(item.currency).toEqual('$103.32');
    });
  });

  describe('sortStock()', () => {
    beforeEach(() => {
      spyOn(component.items, 'sort');
      component.items = stock.vinyls;
      component.sortOptions = sortOptions.vinyl;
    });

    it('should sort items by name in ascending order when selection = sortOptions[0]', () => {
      component.sortStock(sortOptions.vinyl[0]);
      expect(component.items[0].name).toEqual('16 Candles');
    });

    it('should sort items by name in descending order when selection = sortOptions[1]', () => {
      component.sortStock(sortOptions.vinyl[1]);
      expect(component.items[0].name).toEqual('You Send Me');
    });

    it('should sort items by subInfo in ascending order when selection = sortOptions[2]', () => {
      component.sortStock(sortOptions.vinyl[2]);
      expect(component.items[0].subInfo).toEqual('Big Maybelle');
    });

    it('should sort items by subInfo in descending order when selection = sortOptions[3]', () => {
      component.sortStock(sortOptions.vinyl[3]);
      expect(component.items[0].subInfo).toEqual('Wanda Jackson');
    });

    it('should sort items by cost in ascending order when selection = sortOptions[4]', () => {
      component.sortStock(sortOptions.vinyl[4]);
      expect(component.items[0].cost).toEqual(12.34);
    });

    it('should sort items by cost in descending order when selection = sortOptions[5]', () => {
      component.sortStock(sortOptions.vinyl[5]);
      expect(component.items[0].cost).toEqual(58.69);
    });

    it('should sort items by stock in ascending order when selection = sortOptions[6]', () => {
      component.items[10].stock = 1;
      component.sortStock(sortOptions.vinyl[6]);
      expect(component.items[0].stock).toEqual(1);
    });

    it('should sort items by stock in descending order when selection = sortOptions[7]', () => {
      component.items[10].stock = 10;
      component.sortStock(sortOptions.vinyl[7]);
      expect(component.items[0].stock).toEqual(10);
    });

    it('should sort items by year in ascending order when selection = sortOptions[8]', () => {
      component.sortStock(sortOptions.vinyl[8]);
      expect(component.items[0].year).toEqual(1953);
    });

    it('should sort items by year in descending order when selection = sortOptions[9]', () => {
      component.sortStock(sortOptions.vinyl[9]);
      expect(component.items[0].year).toEqual(1959);
    });
  });
});
