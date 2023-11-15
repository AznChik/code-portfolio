import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Story } from '../../common/constants';
import { GameVars } from '../../common/models';

@Component({
  selector: 'app-escape-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class EscapeGameComponent {
  @Input() gameVars: GameVars = new GameVars();
  @Output() gameEvent: EventEmitter<[string, boolean?]> = new EventEmitter<[string, boolean?]>();

  public decreaseHealth(dead?: string): void {
    this.gameEvent.emit(['hurt', true]);
    if (dead) {
      this.gameVars.health = 0;
      this.gameVars.dead = true;
    } else {
      this.gameVars.health--;
    }
  }

  public continueStory(id: string, index: number, option: string): void {
    const route: string = id.concat(index.toString());
    this.gameEvent.emit(['hurt', false]);

    switch (route) {
      case 'start0':
        this.gameVars.story = Story.path0;
        this.decreaseHealth();
        break;
      case 'path00':
        this.gameVars.story = Story.path00;
        break;
      case 'path000':
        this.gameVars.story = Story.path000;
        this.decreaseHealth('dead');
        break;
      case 'path001':
        this.gameVars.story = Story.path001;
        this.gameEvent.emit(['light']);
        break;
      case 'path0010':
        this.gameVars.story = Story.path0010;
        this.decreaseHealth();
        break;
      case 'path00100':
        this.gameVars.story = Story.path00100;
        break;
      case 'path00101':
        this.gameVars.story = Story.path00101;
        break;
      case 'path001000':
      case 'path001010':
        this.gameVars.story = Story.path001000;
        break;
      case 'path001001':
      case 'path001011':
        this.gameVars.story = Story.path001001;
        this.decreaseHealth('dead');
    }
    this.gameVars.modalText.push(this.gameVars.story.text);
    this.gameVars.modalChoice.push(option);
  }
}
