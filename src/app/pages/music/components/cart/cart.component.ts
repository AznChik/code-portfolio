import { Component, HostListener, OnInit } from '@angular/core';

import { Cart } from '../../common/models';
import { MusicService } from '../../common/services/music.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cart: Cart = MusicService.cart;
  public desktopView: boolean = false;
  public displayedTotal: string = '';

  public ngOnInit(): void {
    this.setDesktopView();
  }

  @HostListener('window:resize')
  public setDesktopView() {
    this.desktopView = window.screen.width > 640;
  }

  public toggleCart(action: string): void {
    this.calculateCost();
    const dialog = document.querySelector('dialog') as HTMLDialogElement;
    action === 'open' ? dialog.showModal() : dialog.close();
  }

  public calculateCost(): void {
    this.cart.items.forEach((item) => {
      item.cost *= item.count;
      item.currency = new Intl.NumberFormat(undefined, {
        currency: 'USD',
        style: 'currency'
      }).format(item.cost);
    });

    this.displayedTotal = new Intl.NumberFormat(undefined, {
      currency: 'USD',
      style: 'currency'
    }).format(this.cart.total);
  }
}
