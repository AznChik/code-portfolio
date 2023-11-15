import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { sortOptions } from '../../common/constants';
import { Product } from '../../common/models';
import { MusicService } from '../../common/services/music.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit {
  @Input() chosenProduct: string = '';
  @Output() event: EventEmitter<null> = new EventEmitter();

  public form: FormGroup = new FormGroup({ sort: new FormControl(null) });
  public products: Product[] = [];
  public sortOptions: string[] = [];

  public ngAfterViewInit(): void {
    this.products.forEach((product) => MusicService.updateBorders(product));
  }

  public ngOnInit(): void {
    if (this.chosenProduct === 'instrument') {
      this.products = MusicService.stock.instruments;
      this.sortOptions = sortOptions.instrument;
    }
    if (this.chosenProduct === 'vinyl') {
      this.products = MusicService.stock.vinyls;
      this.sortOptions = sortOptions.vinyl;
    }
    this.products.forEach((product) => this.formatCost(product));
    this.products.sort((a, b) => a.name.localeCompare(b.name));
  }

  public formatCost(product: Product): void {
    product.currency = new Intl.NumberFormat(undefined, {
      currency: 'USD',
      style: 'currency'
    }).format(product.cost);
  }

  public sortStock(selection: string): void {
    for (let i = 0; i < this.sortOptions.length; i++) {
      if (selection === this.sortOptions[i]) {
        (i === 0) && (this.products.sort((a, b) => a.name.localeCompare(b.name)));
        (i === 1) && (this.products.sort((a, b) => b.name.localeCompare(a.name)));
        (i === 2) && (this.products.sort((a, b) => a.subInfo.localeCompare(b.subInfo)));
        (i === 3) && (this.products.sort((a, b) => b.subInfo.localeCompare(a.subInfo)));
        (i === 4) && (this.products.sort((a, b) => a.cost - b.cost));
        (i === 5) && (this.products.sort((a, b) => b.cost - a.cost));
        (i === 6) && (this.products.sort((a, b) => a.stock - b.stock));
        (i === 7) && (this.products.sort((a, b) => b.stock - a.stock));
        (i === 8) && (this.products.sort((a, b) => a.year - b.year));
        (i === 9) && (this.products.sort((a, b) => b.year - a.year));
      }
    }
  }

  public updateCart(action: string, product: Product): void {
    MusicService.updateCart(action, product.id);
  }
}
