import { Component, OnInit } from '@angular/core';

import { emptyCart } from './common/data/carts';
import { fullStock } from './common/data/stocks';
import { MusicService } from './common/services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  public isLoading: boolean = true;
  public showStock: boolean = false;

  public ngOnInit(): void {
    setTimeout(() => {
      MusicService.cart = emptyCart;
      MusicService.stock = fullStock;
      this.isLoading = false;
    }, 3000);
  }
}
