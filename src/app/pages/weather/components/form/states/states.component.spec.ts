import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesComponent } from './states.component';

describe('StatesComponent', () => {
  let component: StatesComponent;
  let fixture: ComponentFixture<StatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatesComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(StatesComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges()', () => {
    let option: HTMLElement;
    let selector: HTMLElement;

    beforeEach(() => {
      option = fixture.nativeElement.querySelector('#NA');
      selector = fixture.nativeElement.querySelector('#state');
    });

    describe('state = !US', () => {
      it('should set stateValue to NA', () => {
        const state = component.form.controls['state'];
        spyOn(state, 'setValue');
        component.state = '!US';
        component.ngOnChanges();
        expect(state.setValue).toHaveBeenCalledWith('NA');
      });

      it('should set selected attribute to !US option', () => {
        spyOn(option, 'setAttribute');
        component.state = '!US';
        component.ngOnChanges();
        expect(option.setAttribute).toHaveBeenCalledWith('selected', '');
      });

      it('should set disabled attribute to state selector', () => {
        spyOn(selector, 'setAttribute');
        component.state = '!US';
        component.ngOnChanges();
        expect(selector.setAttribute).toHaveBeenCalledWith('disabled', '');
      });
    });

    describe('state = US', () => {
      it('should remove selected attribute from !US option', () => {
        spyOn(option, 'removeAttribute');
        component.state = 'A1';
        component.ngOnChanges();
        expect(option.removeAttribute).toHaveBeenCalledWith('selected');
      });

      it('should remove disabled attribute from state selector', () => {
        spyOn(selector, 'removeAttribute');
        component.state = 'A1';
        component.ngOnChanges();
        expect(selector.removeAttribute).toHaveBeenCalledWith('disabled');
      });
    });
  });

  describe('onSelect()', () => {
    it('should set country to US & emit it when input != NA', () => {
      spyOn(component.event, 'emit');
      component.onSelect('A1');
      expect(component.country).toEqual('US');
      expect(component.event.emit).toHaveBeenCalledWith('US');
    });

    it('should set country to !US & emit it when input = NA', () => {
      spyOn(component.event, 'emit');
      component.onSelect('NA');
      expect(component.country).toEqual('!US');
      expect(component.event.emit).toHaveBeenCalledWith('!US');
    });
  });
});
