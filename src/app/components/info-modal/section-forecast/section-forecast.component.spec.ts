import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionForecastComponent } from './section-forecast.component';

describe('SectionForecastComponent', () => {
  let component: SectionForecastComponent;
  let fixture: ComponentFixture<SectionForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionForecastComponent]
    });
    fixture = TestBed.createComponent(SectionForecastComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
