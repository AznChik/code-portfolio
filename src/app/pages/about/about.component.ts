import { Component } from '@angular/core';

import { AboutMe } from './common/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public achievementUnlocked: boolean = false;
  public clues: string[] = [
    AboutMe.computer,
    AboutMe.origami,
    AboutMe.math,
    AboutMe.stitch,
    AboutMe.drawing,
    AboutMe.tv,
    AboutMe.physicalGames,
    AboutMe.virtualGames,
    AboutMe.music,
    AboutMe.karate
  ];

  public toggleList(action: string): void {
    const dialog = document.querySelector('#list-modal') as HTMLDialogElement;
    dialog.scrollTo(0, 0);
    action === 'open' ? dialog.showModal() : dialog.close();
  }
}
