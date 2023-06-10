import { Component } from '@angular/core';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent {
  public expandedCountries: boolean = false;
  public expandedFall: boolean = false;
  public expandedForm: boolean = false;
  public expandedForecast: boolean = false;
  public expandedInfo: boolean = false;
  public expandedSpring: boolean = false;
  public expandedStates: boolean = false;
  public expandedSummer: boolean = false;
  public expandedWeather: boolean = false;
  public expandedWinter: boolean = false;

  public toggleAll(): void {
    this.expandedCountries = !this.expandedCountries;
    this.expandedFall = !this.expandedFall;
    this.expandedForm = !this.expandedForm;
    this.expandedForecast = !this.expandedForecast;
    this.expandedInfo = !this.expandedInfo;
    this.expandedSpring = !this.expandedSpring;
    this.expandedStates = !this.expandedStates;
    this.expandedSummer = !this.expandedSummer;
    this.expandedWeather = !this.expandedWeather;
    this.expandedWinter = !this.expandedWinter;
  }

  public toggleSection(section: string) {
    switch (section) {
      case 'info':
        this.expandedInfo = !this.expandedInfo;
        break;
      case 'form':
        this.expandedForm = !this.expandedForm;
        break;
      case 'states':
        this.expandedStates = !this.expandedStates;
        break;
      case 'countries':
        this.expandedCountries = !this.expandedCountries;
        break;
      case 'forecast':
        this.expandedForecast = !this.expandedForecast;
        break;
      case 'weather':
        this.expandedWeather = !this.expandedWeather;
        break;
      case 'winter':
        this.expandedWinter = !this.expandedWinter;
        break;
      case 'fall':
        this.expandedFall = !this.expandedFall;
        break;
      case 'spring':
        this.expandedSpring = !this.expandedSpring;
        break;
      case 'summer':
        this.expandedSummer = !this.expandedSummer;
    }
  }
}
