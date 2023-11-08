import { Component } from '@angular/core';

import { Story } from './common/constants';
import { Snippet } from './common/models';

@Component({
  selector: 'app-escape',
  templateUrl: './escape.component.html',
  styleUrls: ['./escape.component.scss']
})
export class EscapeComponent {
  public gameStart: boolean = false;
  public health: number = 5;
  public story: Snippet = Story.start;

  public startGame(): void {
    this.gameStart = true;
    document.querySelector('#game')?.classList.add('expand');
  }
}
