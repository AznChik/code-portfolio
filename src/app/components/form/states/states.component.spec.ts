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
