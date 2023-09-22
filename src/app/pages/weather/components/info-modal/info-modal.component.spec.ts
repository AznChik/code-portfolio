import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoModalComponent } from './info-modal.component';

describe('InfoModalComponent', () => {
  let component: InfoModalComponent;
  let fixture: ComponentFixture<InfoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoModalComponent]
    });
    fixture = TestBed.createComponent(InfoModalComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleAll()', () => {
    it('should toggle all booleans to opposite value', () => {
      component.toggleAll();
      expect(component.expandedCountries).toBe(true);
      expect(component.expandedFall).toBe(true);
      expect(component.expandedForm).toBe(true);
      expect(component.expandedForecast).toBe(true);
      expect(component.expandedInfo).toBe(true);
      expect(component.expandedSpring).toBe(true);
      expect(component.expandedStates).toBe(true);
      expect(component.expandedSummer).toBe(true);
      expect(component.expandedWeather).toBe(true);
      expect(component.expandedWinter).toBe(true);
    });
  });

  describe('toggleSection()', () => {
    it('should only toggle expandedInfo when input = info', () => {
      component.toggleSection('info');
      expect(component.expandedCountries).toBe(false);
      expect(component.expandedFall).toBe(false);
      expect(component.expandedForm).toBe(false);
      expect(component.expandedForecast).toBe(false);
      expect(component.expandedInfo).toBe(true);
      expect(component.expandedSpring).toBe(false);
      expect(component.expandedStates).toBe(false);
      expect(component.expandedSummer).toBe(false);
      expect(component.expandedWeather).toBe(false);
      expect(component.expandedWinter).toBe(false);
    });

    it('should only toggle expandedForm when input = form', () => {
      component.toggleSection('form');
      expect(component.expandedCountries).toBe(false);
      expect(component.expandedFall).toBe(false);
      expect(component.expandedForm).toBe(true);
      expect(component.expandedForecast).toBe(false);
      expect(component.expandedInfo).toBe(false);
      expect(component.expandedSpring).toBe(false);
      expect(component.expandedStates).toBe(false);
      expect(component.expandedSummer).toBe(false);
      expect(component.expandedWeather).toBe(false);
      expect(component.expandedWinter).toBe(false);
    });

    it('should only toggle expandedStates when input = states', () => {
      component.toggleSection('states');
      expect(component.expandedCountries).toBe(false);
      expect(component.expandedFall).toBe(false);
      expect(component.expandedForm).toBe(false);
      expect(component.expandedForecast).toBe(false);
      expect(component.expandedInfo).toBe(false);
      expect(component.expandedSpring).toBe(false);
      expect(component.expandedStates).toBe(true);
      expect(component.expandedSummer).toBe(false);
      expect(component.expandedWeather).toBe(false);
      expect(component.expandedWinter).toBe(false);
    });

    it('should only toggle expandedCountries when input = countries', () => {
      component.toggleSection('countries');
      expect(component.expandedCountries).toBe(true);
      expect(component.expandedFall).toBe(false);
      expect(component.expandedForm).toBe(false);
      expect(component.expandedForecast).toBe(false);
      expect(component.expandedInfo).toBe(false);
      expect(component.expandedSpring).toBe(false);
      expect(component.expandedStates).toBe(false);
      expect(component.expandedSummer).toBe(false);
      expect(component.expandedWeather).toBe(false);
      expect(component.expandedWinter).toBe(false);
    });

    it('should only toggle expandedForecast when input = forecast', () => {
      component.toggleSection('forecast');
      expect(component.expandedCountries).toBe(false);
      expect(component.expandedFall).toBe(false);
      expect(component.expandedForm).toBe(false);
      expect(component.expandedForecast).toBe(true);
      expect(component.expandedInfo).toBe(false);
      expect(component.expandedSpring).toBe(false);
      expect(component.expandedStates).toBe(false);
      expect(component.expandedSummer).toBe(false);
      expect(component.expandedWeather).toBe(false);
      expect(component.expandedWinter).toBe(false);
    });

    it('should only toggle expandedWeather when input = weather', () => {
      component.toggleSection('weather');
      expect(component.expandedCountries).toBe(false);
      expect(component.expandedFall).toBe(false);
      expect(component.expandedForm).toBe(false);
      expect(component.expandedForecast).toBe(false);
      expect(component.expandedInfo).toBe(false);
      expect(component.expandedSpring).toBe(false);
      expect(component.expandedStates).toBe(false);
      expect(component.expandedSummer).toBe(false);
      expect(component.expandedWeather).toBe(true);
      expect(component.expandedWinter).toBe(false);
    });

    it('should only toggle expandedWinter when input = winter', () => {
      component.toggleSection('winter');
      expect(component.expandedCountries).toBe(false);
      expect(component.expandedFall).toBe(false);
      expect(component.expandedForm).toBe(false);
      expect(component.expandedForecast).toBe(false);
      expect(component.expandedInfo).toBe(false);
      expect(component.expandedSpring).toBe(false);
      expect(component.expandedStates).toBe(false);
      expect(component.expandedSummer).toBe(false);
      expect(component.expandedWeather).toBe(false);
      expect(component.expandedWinter).toBe(true);
    });

    it('should only toggle expandedFall when input = fall', () => {
      component.toggleSection('fall');
      expect(component.expandedCountries).toBe(false);
      expect(component.expandedFall).toBe(true);
      expect(component.expandedForm).toBe(false);
      expect(component.expandedForecast).toBe(false);
      expect(component.expandedInfo).toBe(false);
      expect(component.expandedSpring).toBe(false);
      expect(component.expandedStates).toBe(false);
      expect(component.expandedSummer).toBe(false);
      expect(component.expandedWeather).toBe(false);
      expect(component.expandedWinter).toBe(false);
    });

    it('should only toggle expandedSpring when input = spring', () => {
      component.toggleSection('spring');
      expect(component.expandedCountries).toBe(false);
      expect(component.expandedFall).toBe(false);
      expect(component.expandedForm).toBe(false);
      expect(component.expandedForecast).toBe(false);
      expect(component.expandedInfo).toBe(false);
      expect(component.expandedSpring).toBe(true);
      expect(component.expandedStates).toBe(false);
      expect(component.expandedSummer).toBe(false);
      expect(component.expandedWeather).toBe(false);
      expect(component.expandedWinter).toBe(false);
    });

    it('should only toggle expandedSummer when input = summer', () => {
      component.toggleSection('summer');
      expect(component.expandedCountries).toBe(false);
      expect(component.expandedFall).toBe(false);
      expect(component.expandedForm).toBe(false);
      expect(component.expandedForecast).toBe(false);
      expect(component.expandedInfo).toBe(false);
      expect(component.expandedSpring).toBe(false);
      expect(component.expandedStates).toBe(false);
      expect(component.expandedSummer).toBe(true);
      expect(component.expandedWeather).toBe(false);
      expect(component.expandedWinter).toBe(false);
    });
  });
});
