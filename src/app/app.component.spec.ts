import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MockForm } from './common/constants/test-constants';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });
  
  it('should create app', () => {
    expect(app).toBeTruthy();
  });

  describe('setForecast()', () => {
    it('should set showForecast to true & showForm to false', () => {
      app.setForecast(MockForm);
      expect(app.showForecast).toBe(true);
      expect(app.showForm).toBe(false);
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
