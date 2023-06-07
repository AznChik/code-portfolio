import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DateFormat } from './common/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public date: string = new Date().toLocaleDateString(navigator.language, DateFormat);
  public showForecast: boolean = false;
  public showForm: boolean = true;

  public setForecast(form: FormGroup): void {
    this.showForecast = true;
    this.showForm = false;
  }

  public goBack(): void {
    this.showForecast = false;
    this.showForm = true;
  }
}
