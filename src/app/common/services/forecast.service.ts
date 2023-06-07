import { Injectable } from '@angular/core';
import { Forecast } from '../models/forecast';
import { Seasons, WeatherTypes } from '../constants/constants';

@Injectable({ providedIn: 'root' })
export class ForecastService {
  public forecast: Forecast = new Forecast();
  public randomSeason: string = '';
  public randomTemp: number = 0;
  public temp: number = 0;
  public weather: string = '';

  public getForecast(request: string): void {
    for (let i = 0; i < 7; i++) {
      const random = Math.round(Math.random() * 10) + 5;
      const response = this.getTempWeather(request);
      this.forecast.highTemp.push(response[0]);
      this.forecast.lowTemp.push(response[0]-random);
      this.forecast.weather.push(response[1]);
    }
  }

  public getTempWeather(request: string): [number, string] {
    this.randomTemp = Math.round(Math.random() * 33);
    switch (request) {
      case Seasons[0]:
        this.temp = this.randomTemp;
        if (this.temp < 11) {
          this.weather = WeatherTypes[0];
        } else if (this.temp < 22) {
          this.weather = WeatherTypes[1];
        } else {
          this.weather = WeatherTypes[2];
        }
        break;
      case Seasons[1]:
      case Seasons[2]:
        this.temp = this.randomTemp + 33;
        if (this.temp < 44) {
          this.weather = WeatherTypes[3];
        } else if (this.temp < 55) {
          this.weather = WeatherTypes[4];
        } else {
          this.weather = WeatherTypes[5];
        }
        break;
      case Seasons[3]:
        this.temp = this.randomTemp + 66;
        if (this.temp < 77) {
          this.weather = WeatherTypes[6];
        } else if (this.temp < 88) {
          this.weather = WeatherTypes[7];
        } else {
          this.weather = WeatherTypes[8];
        }
        break;
      default:
        this.randomSeason = Seasons[Math.round(Math.random() * 3)];
        this.getTempWeather(this.randomSeason);
    }
    return [this.temp, this.weather];
  }
}
