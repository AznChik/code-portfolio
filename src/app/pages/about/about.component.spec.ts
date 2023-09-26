import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent]
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleList()', () => {
    it('should show modal when action = open', () => {
      const dialog = document.querySelector('#list-modal') as HTMLDialogElement;
      spyOn(dialog, 'showModal');
      component.toggleList('open');
      expect(dialog.showModal).toHaveBeenCalled();
    });

    it('should close modal when action != open', () => {
      const dialog = document.querySelector('#list-modal') as HTMLDialogElement;
      spyOn(dialog, 'close');
      component.toggleList('close');
      expect(dialog.close).toHaveBeenCalled();
    });
  });
});
