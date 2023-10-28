import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractControl } from '@angular/forms';

import { CountriesComponent } from './countries.component';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges()', () => {
    let option: HTMLElement;
    let selector: HTMLElement;

    beforeEach(() => {
      option = fixture.nativeElement.querySelector('#US');
      selector = fixture.nativeElement.querySelector('#country');
    });

    describe('country = US', () => {
      it('should set countryValue to U4 (US)', () => {
        const country: AbstractControl<any, any> = component.form.controls['country'];
        spyOn(country, 'setValue');
        component.country = 'US';
        component.ngOnChanges();
        expect(country.setValue).toHaveBeenCalledWith('U4');
      });

      it('should set selected attribute to US option', () => {
        spyOn(option, 'setAttribute');
        component.country = 'US';
        component.ngOnChanges();
        expect(option.setAttribute).toHaveBeenCalledWith('selected', '');
      });

      it('should set disabled attribute to country selector', () => {
        spyOn(selector, 'setAttribute');
        component.country = 'US';
        component.ngOnChanges();
        expect(selector.setAttribute).toHaveBeenCalledWith('disabled', '');
      });
    });

    describe('country != US', () => {
      it('should remove selected attribute from US option', () => {
        spyOn(option, 'removeAttribute');
        component.country = 'NA';
        component.ngOnChanges();
        expect(option.removeAttribute).toHaveBeenCalledWith('selected');
      });

      it('should remove disabled attribute from country selector', () => {
        spyOn(selector, 'removeAttribute');
        component.country = 'NA';
        component.ngOnChanges();
        expect(selector.removeAttribute).toHaveBeenCalledWith('disabled');
      });
    });
  });

  describe('onSelect()', () => {
    it('should set state to !US & emit it when input != U4', () => {
      spyOn(component.event, 'emit');
      component.onSelect('A1');
      expect(component.state).toEqual('!US');
      expect(component.event.emit).toHaveBeenCalledWith('!US');
    });

    it('should set state to US & emit it when input = U4', () => {
      spyOn(component.event, 'emit');
      component.onSelect('U4');
      expect(component.state).toEqual('US');
      expect(component.event.emit).toHaveBeenCalledWith('US');
    });
  });
});
