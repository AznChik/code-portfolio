import { Component } from '@angular/core';

import { Story } from './common/constants';
import { Snippet } from './common/models';

@Component({
  selector: 'app-escape',
  templateUrl: './escape.component.html',
  styleUrls: ['./escape.component.scss']
})
export class EscapeComponent {
  public dead: boolean = false;
  public gameStart: boolean = false;
  public health: number = 5;
  public modalChoice: string[] = [];
  public modalText: string[] = [Story.start.text];
  public story: Snippet = Story.start;

  public startGame(): void {
    this.gameStart = true;
    document.querySelector('#game')?.classList.add('expand');
  }

  public restartGame(): void {
    this.dead = false;
    this.gameStart = false;
    this.health = 5;

    this.modalChoice = [];
    this.modalText = [Story.start.text];
    this.story = Story.start;

    document.querySelector('#game')?.classList.remove('expand');
    document.querySelector('#game')?.classList.remove('hurt');
    document.querySelector('#game')?.classList.remove('light');
    document.querySelector('#health')?.classList.remove('emphasize');
  }

  public toggleMemory(action: string): void {
    const dialog = document.querySelector('#memory-modal') as HTMLDialogElement;
    dialog.scrollTo(0,0);
    action === 'open' ? dialog.showModal() : dialog.close();
  }

  public decreaseHealth(dead?: string): void {
    document.querySelector('#health')?.classList.add('emphasize');
    document.querySelector('#game')?.classList.add('hurt');
    if (dead) {
      this.health = 0;
      this.dead = true;
    } else {
      this.health--;
    }
  }

  public continueStory(id: string, index: number, option: string): void {
    document.querySelector('#health')?.classList.remove('emphasize');
    document.querySelector('#game')?.classList.remove('hurt');
    const route: string = id.concat(index.toString());
    switch (route) {
      case 'start0':
        this.story = Story.path0;
        this.decreaseHealth();
        break;
      case 'path00':
        this.story = Story.path00;
        break;
      case 'path000':
        this.story = Story.path000;
        this.decreaseHealth('dead');
    }
    this.modalText.push(this.story.text);
    this.modalChoice.push(option);
  }
}
