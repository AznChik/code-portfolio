import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFormComponent } from './section-form.component';

describe('SectionFormComponent', () => {
  let component: SectionFormComponent;
  let fixture: ComponentFixture<SectionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionFormComponent]
    });
    fixture = TestBed.createComponent(SectionFormComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
