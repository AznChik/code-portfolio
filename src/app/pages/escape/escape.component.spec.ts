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

  describe('handleOutputs()', () => {
    it('should add hurt class to #game and emphasize class to #health when input = ["hurt", true]', () => {
      const element = fixture.debugElement.nativeElement;
      element.innerHTML += "<div id='game'></div><div id='health'></div>";
      component.handleOutputs(['hurt', true]);
      expect(element.querySelector('#game').classList).toContain('hurt');
      expect(element.querySelector('#health').classList).toContain('emphasize');
    });

    it('should remove hurt class from #game and emphasize class from #health when input = ["hurt", false]', () => {
      const element = fixture.debugElement.nativeElement;
      element.innerHTML += "<div id='game'></div><div id='health'></div>";
      document.querySelector('#game')?.classList.add('hurt');
      document.querySelector('#health')?.classList.add('emphasize');
      component.handleOutputs(['hurt', false]);
      expect(element.querySelector('#game').classList).not.toContain('hurt');
      expect(element.querySelector('#health').classList).not.toContain('emphasize');
    });

    it('should add light class to #game when input = ["light"]', () => {
      const element = fixture.debugElement.nativeElement;
      element.innerHTML += "<div id='game'></div>";
      component.handleOutputs(['light']);
      expect(element.querySelector('#game').classList).toContain('light');
    });

    it('should set gameStart to true and add expand class to #game when input = ["start"]', () => {
      const element = fixture.debugElement.nativeElement;
      element.innerHTML += "<div id='game'></div>";
      component.gameVars.gameStart = false;
      component.handleOutputs(['start']);
      expect(component.gameVars.gameStart).toBe(true);
      expect(element.querySelector('#game').classList).toContain('expand');
    });
  });

  describe('restartGame()', () => {
    it('should set dead and gameStart to false, and health to 5', () => {
      component.gameVars.dead = true;
      component.gameVars.gameStart = true;
      component.gameVars.health = 0;

      component.restartGame();
      expect(component.gameVars.dead).toBe(false);
      expect(component.gameVars.gameStart).toBe(false);
      expect(component.gameVars.health).toEqual(5);
    });

    it('should set modalChoice to empty array, modalText to start text, and story to start', () => {
      component.gameVars.modalChoice = [Story.start.options[0]];
      component.gameVars.modalText = [Story.start.text, Story.path0.text];
      component.gameVars.story = Story.path0;

      component.restartGame();
      expect(component.gameVars.modalChoice).toEqual([]);
      expect(component.gameVars.modalText).toEqual([Story.start.text]);
      expect(component.gameVars.story).toEqual(Story.start);
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
});
