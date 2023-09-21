import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSeasonComponent } from './section-season.component';

describe('SectionSeasonComponent', () => {
  let component: SectionSeasonComponent;
  let fixture: ComponentFixture<SectionSeasonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSeasonComponent]
    });
    fixture = TestBed.createComponent(SectionSeasonComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
