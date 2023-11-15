import { Component } from '@angular/core';

import { Story } from './common/constants';
import { GameVars } from './common/models';

@Component({
  selector: 'app-escape',
  templateUrl: './escape.component.html',
  styleUrls: ['./escape.component.scss']
})
export class EscapeComponent {
  public gameVars: GameVars = new GameVars();

  public handleOutputs(event: [string, boolean?]): void {
    switch (event[0]) {
      case 'hurt':
        if (event[1]) {
          document.querySelector('#game')?.classList.add('hurt');
          document.querySelector('#health')?.classList.add('emphasize');
        } else {
          document.querySelector('#game')?.classList.remove('hurt');
          document.querySelector('#health')?.classList.remove('emphasize');
        }
        break;
      case 'light':
        document.querySelector('#game')?.classList.add('light');
        break;
      case 'start':
        this.gameVars.gameStart = true;
        document.querySelector('#game')?.classList.add('expand');
    }
  }

  public restartGame(): void {
    this.gameVars.dead = false;
    this.gameVars.gameStart = false;
    this.gameVars.health = 5;

    this.gameVars.modalChoice = [];
    this.gameVars.modalText = [Story.start.text];
    this.gameVars.story = Story.start;

    document.querySelector('#game')?.classList.remove('expand');
    document.querySelector('#game')?.classList.remove('hurt');
    document.querySelector('#game')?.classList.remove('light');
    document.querySelector('#health')?.classList.remove('emphasize');
  }
}
