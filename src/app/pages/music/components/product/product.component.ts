import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from '../../common/models';
import { MusicService } from '../../common/services/music.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() public chosenProduct: string = '';
  @Output() public event: EventEmitter<null> = new EventEmitter();

  public items: Product[] = [];

  public ngOnInit(): void {
    (this.chosenProduct === 'instrument') && (this.items = MusicService.stock.instruments);
    (this.chosenProduct === 'vinyl') && (this.items = MusicService.stock.vinyls);
    this.items.forEach((item) => this.formatCost(item));
  }

  public formatCost(item: Product): void {
    item.currency = new Intl.NumberFormat(undefined, {
      currency: 'USD',
      style: 'currency'
    }).format(item.cost);
  }
}
