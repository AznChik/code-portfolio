import { Injectable } from '@angular/core';

import { Cart, Stock } from '../models';

@Injectable({ providedIn: 'root' })
export class MusicService {
  static cart: Cart;
  static stock: Stock;
}
