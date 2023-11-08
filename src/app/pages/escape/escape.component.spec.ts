import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story } from './common/constants';
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

  describe('startGame()', () => {
    it('should set gameStart to true and add expand class to #game', () => {
      const element = fixture.debugElement.nativeElement;
      element.innerHTML += "<div id='game'></div>";
      component.gameStart = false;
      component.startGame();
      expect(component.gameStart).toBe(true);
      expect(element.querySelector('#game').classList).toContain('expand');
    });
  });

  describe('restartGame()', () => {
    it('should set dead and gameStart to false, and health to 5', () => {
      component.dead = true;
      component.gameStart = true;
      component.health = 0;

      component.restartGame();
      expect(component.dead).toBe(false);
      expect(component.gameStart).toBe(false);
      expect(component.health).toEqual(5);
    });

    it('should set modalChoice to empty array, modalText to start text, and story to start', () => {
      component.modalChoice = [Story.start.options[0]];
      component.modalText = [Story.start.text, Story.path0.text];
      component.story = Story.path0;

      component.restartGame();
      expect(component.modalChoice).toEqual([]);
      expect(component.modalText).toEqual([Story.start.text]);
      expect(component.story).toEqual(Story.start);
    });

    it('should remove expand, hurt, and light classes from #game, and emphasize class from #health', () => {
      const element = fixture.debugElement.nativeElement;
      element.innerHTML += "<div id='text'></div><div id='game'></div><div id='health'></div>";
      document.querySelector('#game')?.classList.add('expand');
      document.querySelector('#game')?.classList.add('hurt');
      document.querySelector('#game')?.classList.add('light');
      document.querySelector('#health')?.classList.add('emphasize');

      component.restartGame();
      expect(element.querySelector('#game').classList).not.toContain('expand');
      expect(element.querySelector('#game').classList).not.toContain('hurt');
      expect(element.querySelector('#game').classList).not.toContain('light');
      expect(element.querySelector('#health').classList).not.toContain('emphasize');
    });
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

  describe('decreaseHealth()', () => {
    it('should set health to 0, dead to true, add emphasize class to #health, and hurt class to #game when input is passed', () => {
      const element = fixture.debugElement.nativeElement;
      element.innerHTML += "<div id='game'></div><div id='health'></div>";
      component.health = 5;
      component.dead = false;

      component.decreaseHealth('dead');
      expect(component.health).toEqual(0);
      expect(component.dead).toBe(true);
      expect(element.querySelector('#game').classList).toContain('hurt');
      expect(element.querySelector('#health').classList).toContain('emphasize');
    });

    it('should decrease health by 1, add emphasize class to #health, and hurt class to #game when input is not passed', () => {
      const element = fixture.debugElement.nativeElement;
      element.innerHTML += "<div id='game'></div><div id='health'></div>";
      component.health = 5;

      component.decreaseHealth();
      expect(component.health).toEqual(4);
      expect(element.querySelector('#game').classList).toContain('hurt');
      expect(element.querySelector('#health').classList).toContain('emphasize');
    });
  });

  describe('continueStory()', () => {
    it('should remove emphasize class from #health and hurt class from #game', () => {
      const element = fixture.debugElement.nativeElement;
      element.innerHTML += "<div id='game'></div><div id='health'></div>";
      document.querySelector('#health')?.classList.add('emphasize');
      component.continueStory('id', 0, 'option');
      expect(element.querySelector('#game').classList).not.toContain('hurt');
      expect(element.querySelector('#health').classList).not.toContain('emphasize');
    });

    it('should update modalText[] and modalChoice[]', () => {
      component.modalText = [Story.start.text];
      component.modalChoice = [];
      component.continueStory('start', 0, 'option');
      expect(component.modalText[1]).toEqual(Story.path0.text);
      expect(component.modalChoice[0]).toEqual('option');
    });

    it('should set story to Story.path0 and call decreaseHealth() when case = start0', () => {
      spyOn(component, 'decreaseHealth');
      component.story = Story.start;
      component.continueStory('start', 0, Story.start.options[0]);
      expect(component.story).toEqual(Story.path0);
      expect(component.decreaseHealth).toHaveBeenCalled();
    });

    it('should set story to Story.path00 when case = path00', () => {
      component.story = Story.start;
      component.continueStory('path0', 0, Story.path0.options[0]);
      expect(component.story).toEqual(Story.path00);
    });

    it('should set story to Story.path000 and call decreaseHealth() when case = path000', () => {
      spyOn(component, 'decreaseHealth');
      component.story = Story.start;
      component.continueStory('path00', 0, Story.path00.options[0]);
      expect(component.story).toEqual(Story.path000);
      expect(component.decreaseHealth).toHaveBeenCalledWith('dead');
    });
  });
});
