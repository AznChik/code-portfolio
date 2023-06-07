import { TestBed } from '@angular/core/testing';

import { ForecastService } from './forecast.service';
import { Seasons, WeatherTypes } from '../constants/constants';

describe('ForecastService', () => {
  let service: ForecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  describe('getForecast()', () => {
    it('should call getTempWeather() with input', () => {
      spyOn(service, 'getTempWeather').and.callThrough();
      service.getForecast('test');
      expect(service.getTempWeather).toHaveBeenCalledWith('test');
    });

    it('should update highTemp[], lowTemp[], & weather[]', () => {
      service.getForecast('test');
      expect(service.forecast.highTemp.length).toEqual(7);
      expect(service.forecast.lowTemp.length).toEqual(7);
      expect(service.forecast.weather.length).toEqual(7);
    });
  });

  describe('getTempWeather()', () => {
    it('should return [temp, weather]', () => {
      const response = service.getTempWeather('test');
      expect(typeof response[0]).toEqual('number');
      expect(typeof response[1]).toEqual('string');
    });

    it('should set randomSeason & call getTempWeather() when input != season', () => {
      spyOn(service, 'getTempWeather').and.callThrough();
      service.getTempWeather('test');
      expect(Seasons).toContain(service.randomSeason);
      expect(service.getTempWeather).toHaveBeenCalledWith(service.randomSeason);
    });
  
    it('should set weather & set temp = randomTemp when input = winter', () => {
      const winterWeather = WeatherTypes.slice(0, 3);
      service.getTempWeather(Seasons[0]);
      expect(winterWeather).toContain(service.weather);
      expect(service.temp).toEqual(service.randomTemp);
      expect(service.temp).not.toEqual(0);
      expect(service.randomTemp).not.toEqual(0);
    });
  
    it('should set weather & set temp = randomTemp+33 when input = fall', () => {
      const fallWeather = WeatherTypes.slice(3, 6);
      service.getTempWeather(Seasons[1]);
      expect(fallWeather).toContain(service.weather);
      expect(service.temp).toEqual(service.randomTemp + 33);
    });
  
    it('should set weather & set temp = randomTemp+33 when input = spring', () => {
      const springWeather = WeatherTypes.slice(3, 6);
      service.getTempWeather(Seasons[2]);
      expect(springWeather).toContain(service.weather);
      expect(service.temp).toEqual(service.randomTemp + 33);
    });
  
    it('should set weather & set temp = randomTemp+66 when input = summer', () => {
      const summerWeather = WeatherTypes.slice(6);
      service.getTempWeather(Seasons[3]);
      expect(summerWeather).toContain(service.weather);
      expect(service.temp).toEqual(service.randomTemp + 66);
    });
  });
});
