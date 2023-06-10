import { Component } from '@angular/core';
import { ForecastService } from './common/services/forecast.service';
import { FormGroup } from '@angular/forms';
import { Forecast } from './common/models/forecast';
import { DateFormat, Seasons } from './common/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private forecastService: ForecastService) {}

  public date: string = new Date().toLocaleDateString(navigator.language, DateFormat);
  public forecast: Forecast = new Forecast();
  public showForecast: boolean = false;
  public showForm: boolean = true;
  public streetValue: string = '';

  public toggleModal(action: string): void {
    const dialog = document.querySelector('dialog') as HTMLDialogElement;
    action === 'open' ? dialog.showModal() : dialog.close();
  }

  public setForecast(form: FormGroup): void {
    this.streetValue = form.controls['street'].value;
    this.triggerService(this.streetValue);
    
    this.forecast = this.forecastService.forecast;
    this.showForecast = true;
    this.showForm = false;
  }
  
  public triggerService(streetValue: string): void {
    switch (true) {
      case streetValue.includes('Winter'):
        this.forecastService.getForecast(Seasons[0]);
        break;
      case streetValue.includes('Fall'):
        this.forecastService.getForecast(Seasons[1]);
        break;
      case streetValue.includes('Spring'):
        this.forecastService.getForecast(Seasons[2]);
        break;
      case streetValue.includes('Summer'):
        this.forecastService.getForecast(Seasons[3]);
        break;
      default:
        this.forecastService.getForecast('random');
        this.streetValue = this.forecastService.randomSeason;
    }
  }

  public goBack(): void {
    this.showForecast = false;
    this.showForm = true;
  }
}
