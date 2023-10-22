import { Component } from '@angular/core';

import { Cart } from '../../common/models';
import { MusicService } from '../../common/services/music.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public cart: Cart = MusicService.cart;

  public toggleCart(action: string): void {
    const dialog = document.querySelector('dialog') as HTMLDialogElement;
    action === 'open' ? dialog.showModal() : dialog.close();
  }
}
