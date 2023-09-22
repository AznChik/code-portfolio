import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInfoComponent } from './section-info.component';

describe('SectionInfoComponent', () => {
  let component: SectionInfoComponent;
  let fixture: ComponentFixture<SectionInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionInfoComponent]
    });
    fixture = TestBed.createComponent(SectionInfoComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
