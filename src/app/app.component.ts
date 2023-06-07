import { Component } from '@angular/core';
import { DateFormat } from './common/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public date: string = new Date().toLocaleDateString(navigator.language, DateFormat);
}
