import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempWeatherComponent } from './temp-weather.component';

describe('TempWeatherComponent', () => {
  let component: TempWeatherComponent;
  let fixture: ComponentFixture<TempWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempWeatherComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(TempWeatherComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
