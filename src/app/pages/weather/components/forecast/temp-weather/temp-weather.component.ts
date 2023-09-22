import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temp-weather',
  templateUrl: './temp-weather.component.html',
  styleUrls: ['./temp-weather.component.scss']
})
export class TempWeatherComponent {
  @Input() highTemp: number = 0;
  @Input() lowTemp: number = 0;
  @Input() weather: string = '';
}
