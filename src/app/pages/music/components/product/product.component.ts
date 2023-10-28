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
  @Input() public chosenProduct: string = '';
  @Output() public event: EventEmitter<null> = new EventEmitter();

  public form: FormGroup = new FormGroup({ sort: new FormControl(null) });
  public items: Product[] = [];
  public sortOptions: string[] = [];

  public ngAfterViewInit(): void {
    this.items.forEach((item) => MusicService.updateBorders(item));
  }

  public ngOnInit(): void {
    if (this.chosenProduct === 'instrument') {
      this.items = MusicService.stock.instruments;
      this.sortOptions = sortOptions.instrument;
    }
    if (this.chosenProduct === 'vinyl') {
      this.items = MusicService.stock.vinyls;
      this.sortOptions = sortOptions.vinyl;
    }
    this.items.forEach((item) => this.formatCost(item));
    this.items.sort((a, b) => a.name.localeCompare(b.name));
  }

  public formatCost(item: Product): void {
    item.currency = new Intl.NumberFormat(undefined, {
      currency: 'USD',
      style: 'currency'
    }).format(item.cost);
  }

  public sortStock(selection: string): void {
    for (let i = 0; i < this.sortOptions.length; i++) {
      if (selection === this.sortOptions[i]) {
        i === 0 && this.items.sort((a, b) => a.name.localeCompare(b.name));
        i === 1 && this.items.sort((a, b) => b.name.localeCompare(a.name));
        i === 2 && this.items.sort((a, b) => a.subInfo.localeCompare(b.subInfo));
        i === 3 && this.items.sort((a, b) => b.subInfo.localeCompare(a.subInfo));
        i === 4 && this.items.sort((a, b) => a.cost - b.cost);
        i === 5 && this.items.sort((a, b) => b.cost - a.cost);
        i === 6 && this.items.sort((a, b) => a.stock - b.stock);
        i === 7 && this.items.sort((a, b) => b.stock - a.stock);
        i === 8 && this.items.sort((a, b) => a.year - b.year);
        i === 9 && this.items.sort((a, b) => b.year - a.year);
      }
    }
  }

  public updateCart(action: string, product: Product): void {
    MusicService.updateCart(action, product.id);
  }
}
