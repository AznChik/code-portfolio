import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { MockForm } from 'src/app/common/constants/test-constants';
import { StatesComponent } from './states/states.component';
import { CountriesComponent } from './countries/countries.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CountriesComponent,
        FormComponent,
        StatesComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit()', () => {
    beforeEach(() => {
      component.form = MockForm;
    });
    
    it('should set invalidFields[] to all false', () => {
      component.onSubmit();
      expect(component.invalidFields).toEqual([false, false, false, false, false]);
    });

    it('should emit form when all fields are valid', () => {
      spyOn(component.event, 'emit');
      component.onSubmit();
      expect(component.event.emit).toHaveBeenCalledWith(MockForm);
    });

    describe('invalid street', () => {
      it('should set invalidFields[0] to true', () => {
        component.form.controls['street'].setValue('invalid street');
        component.onSubmit();
        expect(component.invalidFields[0]).toBe(true);
      });
      
      describe ('focus street', () => {
        let street: HTMLElement;
  
        beforeEach(() => {
          street = fixture.nativeElement.querySelector('#street');
          spyOn(street, 'focus');
        });

        it('streetValue is null', () => {
          component.form.controls['street'].setValue(null);
          component.onSubmit();
          expect(street.focus).toHaveBeenCalled();
        });
  
        it('streetValue not begin with numbers', () => {
          component.form.controls['street'].setValue('Name St.');
          component.onSubmit();
          expect(street.focus).toHaveBeenCalled();
        });

        it('streetValue words not capitalized', () => {
          component.form.controls['street'].setValue('1234 name st.');
          component.onSubmit();
          expect(street.focus).toHaveBeenCalled();
        });

        it('streetValue not end with period', () => {
          component.form.controls['street'].setValue('1234 Name St. abc123');
          component.onSubmit();
          expect(street.focus).toHaveBeenCalled();
        });
      });
    });

    describe('invalid city & previous field valid', () => {
      beforeEach(() => {
        component.form.controls['street'].setValue('1234 Name St.');
      });

      it('should set invalidFields[1] to true', () => {
        component.form.controls['city'].setValue('invalid city');
        component.onSubmit();
        expect(component.invalidFields[1]).toBe(true);
      });
      
      describe ('focus city', () => {
        let city: HTMLElement;
  
        beforeEach(() => {
          city = fixture.nativeElement.querySelector('#city');
          spyOn(city, 'focus');
        });

        it('cityValue is null', () => {
          component.form.controls['city'].setValue(null);
          component.onSubmit();
          expect(city.focus).toHaveBeenCalled();
        });
  
        it('cityValue not capitalized', () => {
          component.form.controls['city'].setValue('townsville');
          component.onSubmit();
          expect(city.focus).toHaveBeenCalled();
        });

        it('cityValue contains numbers', () => {
          component.form.controls['city'].setValue('Townsville123');
          component.onSubmit();
          expect(city.focus).toHaveBeenCalled();
        });
      });
    });

    describe('invalid state & previous fields valid', () => {
      let state: HTMLElement;

      beforeEach(() => {
        component.form.controls['street'].setValue('1234 Name St.');
        component.form.controls['city'].setValue('Townsville');
        state = fixture.nativeElement.querySelector('#state');
        spyOn(state, 'focus');
      });

      it('should set invalidFields[2] to true & focus state when null', () => {
        component.form.controls['state'].setValue(null);
        component.onSubmit();
        expect(component.invalidFields[2]).toBe(true);
        expect(state.focus).toHaveBeenCalled();
      });
    });

    describe('invalid country & previous fields valid', () => {
      let country: HTMLElement;

      beforeEach(() => {
        component.form.controls['street'].setValue('1234 Name St.');
        component.form.controls['city'].setValue('Townsville');
        component.form.controls['state'].setValue('NA');
        country = fixture.nativeElement.querySelector('#country');
        spyOn(country, 'focus');
      });

      it('should set invalidFields[3] to true & focus country when null', () => {
        component.form.controls['country'].setValue(null);
        component.onSubmit();
        expect(component.invalidFields[3]).toBe(true);
        expect(country.focus).toHaveBeenCalled();
      });
    });

    describe('invalid zip & previous fields valid', () => {
      beforeEach(() => {
        component.form.controls['street'].setValue('1234 Name St.');
        component.form.controls['city'].setValue('Townsville');
        component.form.controls['state'].setValue('NA');
        component.form.controls['country'].setValue('A1');
      });

      it('should set invalidFields[4] to true', () => {
        component.form.controls['zip'].setValue('invalid zip');
        component.onSubmit();
        expect(component.invalidFields[4]).toBe(true);
      });
      
      describe ('focus zip', () => {
        let zip: HTMLElement;
  
        beforeEach(() => {
          zip = fixture.nativeElement.querySelector('#zip');
          spyOn(zip, 'focus');
        });

        it('zipValue is null', () => {
          component.form.controls['zip'].setValue(null);
          component.onSubmit();
          expect(zip.focus).toHaveBeenCalled();
        });
  
        it('zipValue not start with 5 digits', () => {
          component.form.controls['zip'].setValue('123456-7890');
          component.onSubmit();
          expect(zip.focus).toHaveBeenCalled();
        });

        it('zipValue not contain hyphen in middle', () => {
          component.form.controls['zip'].setValue('123456789');
          component.onSubmit();
          expect(zip.focus).toHaveBeenCalled();
        });

        it('zipValue not end with 4 digits', () => {
          component.form.controls['zip'].setValue('12345-67890');
          component.onSubmit();
          expect(zip.focus).toHaveBeenCalled();
        });

        it('zipValue contains letters', () => {
          component.form.controls['zip'].setValue('abcde-fghi');
          component.onSubmit();
          expect(zip.focus).toHaveBeenCalled();
        });
      });
    });
  });
});
