import { Component, EventEmitter, Output } from '@angular/core';

import { AboutMe } from '../../common/constants';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  @Output() achievementEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public clueNumber: string = '0';
  public clueText: string | undefined = undefined;
  public easterEgg: boolean = false;

  public toggleModal(clue?: string): void {
    const dialog = document.querySelector('#clue-modal') as HTMLDialogElement;
    if (clue) {
      this.easterEgg = false;
      this.setClue(clue);
      dialog.showModal();
      document.getElementById('text')?.scrollTo(0, 0);
    } else {
      dialog.close();
    }
  }

  public setClue(clue: string): void {
    switch (clue) {
      case 'computer':
        this.clueNumber = '1';
        this.clueText = AboutMe.computer;
        break;
      case 'origami':
        this.clueNumber = '2';
        this.clueText = AboutMe.origami;
        break;
      case 'math':
        this.clueNumber = '3';
        this.clueText = AboutMe.math;
        break;
      case 'stitch':
        this.clueNumber = '4';
        this.clueText = AboutMe.stitch;
        break;
      case 'drawing':
        this.clueNumber = '5';
        this.clueText = AboutMe.drawing;
        break;
      case 'tv':
        this.clueNumber = '6';
        this.clueText = AboutMe.tv;
        break;
      case 'physical games':
        this.clueNumber = '7';
        this.clueText = AboutMe.physicalGames;
        break;
      case 'virtual games':
        this.clueNumber = '8';
        this.clueText = AboutMe.virtualGames;
        break;
      case 'music':
        this.clueNumber = '9';
        this.clueText = AboutMe.music;
        break;
      case 'karate':
        this.clueNumber = '10';
        this.clueText = AboutMe.karate;
        break;
      default:
        this.easterEgg = true;
        this.clueText = undefined;
        this.achievementEvent.emit(true);
    }
  }
}
