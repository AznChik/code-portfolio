import { ComponentFixture, TestBed } from '@angular/core/testing';

import { sortOptions } from '../../common/constants';
import { fullStock } from '../../common/data/stocks';
import { Product, Stock } from '../../common/models';
import { MusicService } from '../../common/services/music.service';
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

  describe('ngAfterViewInit()', () => {
    it('should call updateBorder() for each product', () => {
      spyOn(MusicService, 'updateBorders');
      component.products = stock.instruments;
      component.ngAfterViewInit();
      expect(MusicService.updateBorders).toHaveBeenCalledTimes(component.products.length);
    });
  });

  describe('ngOnInit()', () => {
    beforeEach(() => {
      component.products = [];
      component.sortOptions = [];
    });

    it('should set products & sortOptions for instruments when chosenProduct = instrument', () => {
      component.chosenProduct = 'instrument';
      component.ngOnInit();
      expect(component.products).toEqual(stock.instruments);
      expect(component.sortOptions).toEqual(sortOptions.instrument);
    });

    it('should set products & sortOptions for vinyls when chosenProduct = vinyl', () => {
      component.chosenProduct = 'vinyl';
      component.ngOnInit();
      expect(component.products).toEqual(stock.vinyls);
      expect(component.sortOptions).toEqual(sortOptions.vinyl);
    });

    it('should call formatCost() for each product', () => {
      spyOn(component, 'formatCost');
      component.products = stock.instruments;
      component.ngOnInit();
      expect(component.formatCost).toHaveBeenCalledTimes(stock.instruments.length);
    });

    it('should sort products by name in descending order', () => {
      spyOn(component.products, 'sort');
      component.products = stock.instruments;
      component.ngOnInit();
      expect(component.products[0].name).toEqual('Bagpipes');
    });
  });

  describe('formatCost()', () => {
    it('should format product cost into currency', () => {
      const product: Product = stock.instruments[0];
      component.formatCost(product);
      expect(product.currency).toEqual('$103.32');
    });
  });

  describe('sortStock()', () => {
    beforeEach(() => {
      spyOn(component.products, 'sort');
      component.products = stock.vinyls;
      component.sortOptions = sortOptions.vinyl;
    });

    it('should sort products by name in ascending order when selection = sortOptions[0]', () => {
      component.sortStock(sortOptions.vinyl[0]);
      expect(component.products[0].name).toEqual('16 Candles');
    });

    it('should sort products by name in descending order when selection = sortOptions[1]', () => {
      component.sortStock(sortOptions.vinyl[1]);
      expect(component.products[0].name).toEqual('You Send Me');
    });

    it('should sort products by subInfo in ascending order when selection = sortOptions[2]', () => {
      component.sortStock(sortOptions.vinyl[2]);
      expect(component.products[0].subInfo).toEqual('Big Maybelle');
    });

    it('should sort products by subInfo in descending order when selection = sortOptions[3]', () => {
      component.sortStock(sortOptions.vinyl[3]);
      expect(component.products[0].subInfo).toEqual('Wanda Jackson');
    });

    it('should sort products by cost in ascending order when selection = sortOptions[4]', () => {
      component.sortStock(sortOptions.vinyl[4]);
      expect(component.products[0].cost).toEqual(12.34);
    });

    it('should sort products by cost in descending order when selection = sortOptions[5]', () => {
      component.sortStock(sortOptions.vinyl[5]);
      expect(component.products[0].cost).toEqual(58.69);
    });

    it('should sort products by stock in ascending order when selection = sortOptions[6]', () => {
      component.products[10].stock = 1;
      component.sortStock(sortOptions.vinyl[6]);
      expect(component.products[0].stock).toEqual(1);
    });

    it('should sort products by stock in descending order when selection = sortOptions[7]', () => {
      component.products[10].stock = 10;
      component.sortStock(sortOptions.vinyl[7]);
      expect(component.products[0].stock).toEqual(10);
    });

    it('should sort products by year in ascending order when selection = sortOptions[8]', () => {
      component.sortStock(sortOptions.vinyl[8]);
      expect(component.products[0].year).toEqual(1953);
    });

    it('should sort products by year in descending order when selection = sortOptions[9]', () => {
      component.sortStock(sortOptions.vinyl[9]);
      expect(component.products[0].year).toEqual(1959);
    });
  });

  describe('updateCart()', () => {
    it('should call updateCart() from music service', () => {
      spyOn(MusicService, 'updateCart');
      component.updateCart('action', stock.instruments[0]);
      expect(MusicService.updateCart).toHaveBeenCalledWith('action', stock.instruments[0].id);
    });
  });
});
