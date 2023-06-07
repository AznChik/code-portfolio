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
});
