import { Component, OnInit } from '@angular/core';
import { Cart, Stock } from './common/models';
import { emptyCart } from './common/data/carts';
import { emptyStock, fullStock } from './common/data/stocks';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  public cart: Cart = emptyCart;
  public isLoading: boolean = true;
  public stock: Stock = emptyStock;

  public ngOnInit(): void {
    setTimeout(() => {
      this.cart = emptyCart;
      this.stock = fullStock;
      this.isLoading = false;
    }, 3000);
  }
}
