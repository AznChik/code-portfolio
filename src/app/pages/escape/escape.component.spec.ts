import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeComponent } from './escape.component';

describe('EscapeComponent', () => {
  let component: EscapeComponent;
  let fixture: ComponentFixture<EscapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscapeComponent]
    });
    fixture = TestBed.createComponent(EscapeComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
