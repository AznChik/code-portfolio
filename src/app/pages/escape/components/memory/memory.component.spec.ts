import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryComponent } from './memory.component';

describe('MemoryComponent', () => {
  let component: MemoryComponent;
  let fixture: ComponentFixture<MemoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemoryComponent]
    });
    fixture = TestBed.createComponent(MemoryComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleMemory()', () => {
    it('should show modal and scroll to top when action = open', () => {
      const dialog = document.querySelector('#memory-modal') as HTMLDialogElement;
      spyOn(dialog, 'showModal');
      spyOn(dialog, 'scrollTo');
      component.toggleMemory('open');
      expect(dialog.showModal).toHaveBeenCalled();
      expect(dialog.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    it('should close modal when action != open', () => {
      const dialog = document.querySelector('#memory-modal') as HTMLDialogElement;
      spyOn(dialog, 'close');
      component.toggleMemory('close');
      expect(dialog.close).toHaveBeenCalled();
    });
  });
});
