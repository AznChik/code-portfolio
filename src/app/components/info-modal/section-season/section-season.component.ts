import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-season',
  templateUrl: './section-season.component.html',
  styleUrls: ['./section-season.component.scss']
})
export class SectionSeasonComponent {
  @Input() colors: string = '';
  @Input() highTemps: number[] = [];
  @Input() main: boolean = false;
  @Input() weather: string[] = [];
}
