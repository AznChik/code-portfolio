import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockForecasts, MockForm, MockStreets } from './common/constants/test-constants';
import { ForecastService } from './common/services/forecast.service';
import { Seasons } from './common/constants/constants';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let forecastService: ForecastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    forecastService = TestBed.inject(ForecastService);
    app = fixture.componentInstance;
  });
  
  it('should create app', () => {
    expect(app).toBeTruthy();
  });

  describe('setForecast()', () => {
    it('should set streetValue & call triggerService()', () => {
      spyOn(app, 'triggerService');
      MockForm.controls['street'].setValue(MockStreets.random);
      app.setForecast(MockForm);
      expect(app.streetValue).toEqual(MockStreets.random);
      expect(app.triggerService).toHaveBeenCalledWith(app.streetValue);
    });

    it('should set forecast from service', () => {
      forecastService.forecast = MockForecasts.summer;
      app.setForecast(MockForm);
      expect(app.forecast).toEqual(MockForecasts.summer)
    });

    it('should set showForecast to true & showForm to false', () => {
      app.setForecast(MockForm);
      expect(app.showForecast).toBe(true);
      expect(app.showForm).toBe(false);
    });
  });

  describe('triggerService()', () => {
    beforeEach(() => {
      spyOn(forecastService, 'getForecast');
    });

    it('should call service.getForecast(winter) when streetValue includes winter', () => {
      app.triggerService(MockStreets.winter);
      expect(forecastService.getForecast).toHaveBeenCalledWith(Seasons[0]);
    });

    it('should call service.getForecast(fall) when streetValue includes fall', () => {
      app.triggerService(MockStreets.fall);
      expect(forecastService.getForecast).toHaveBeenCalledWith(Seasons[1]);
    });

    it('should call service.getForecast(spring) when streetValue includes spring', () => {
      app.triggerService(MockStreets.spring);
      expect(forecastService.getForecast).toHaveBeenCalledWith(Seasons[2]);
    });

    it('should call service.getForecast(summer) when streetValue includes summer', () => {
      app.triggerService(MockStreets.summer);
      expect(forecastService.getForecast).toHaveBeenCalledWith(Seasons[3]);
    });

    it('should call service.getForecast(random) & update streetValue when it !include season', () => {
      forecastService.randomSeason = Seasons[0];
      app.triggerService(MockStreets.random);
      expect(forecastService.getForecast).toHaveBeenCalledWith('random');
      expect(app.streetValue).toEqual(Seasons[0]);
    });
  });

  describe('goBack()', () => {
    it('should set showForecast to false & showForm to true', () => {
      app.goBack();
      expect(app.showForecast).toBe(false);
      expect(app.showForm).toBe(true);
    });
  });
});
