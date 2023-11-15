import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Story } from '../../common/constants';
import { EscapeGameComponent } from './game.component';

describe('EscapeGameComponent', () => {
  let component: EscapeGameComponent;
  let fixture: ComponentFixture<EscapeGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscapeGameComponent]
    });
    fixture = TestBed.createComponent(EscapeGameComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('decreaseHealth()', () => {
    it('should set health to 0, dead to true, and emit gameEvent when input is passed', () => {
      spyOn(component.gameEvent, 'emit');
      component.gameVars.health = 5;
      component.gameVars.dead = false;
      component.decreaseHealth('dead');
      expect(component.gameEvent.emit).toHaveBeenCalledWith(['hurt', true]);
      expect(component.gameVars.health).toEqual(0);
      expect(component.gameVars.dead).toBe(true);
    });

    it('should decrease health by 1 and emit gameEvent when input is not passed', () => {
      spyOn(component.gameEvent, 'emit');
      component.gameVars.health = 5;
      component.decreaseHealth();
      expect(component.gameEvent.emit).toHaveBeenCalledWith(['hurt', true]);
      expect(component.gameVars.health).toEqual(4);
    });
  });

  describe('continueStory()', () => {
    it('should emit gameEvent', () => {
      spyOn(component.gameEvent, 'emit');
      component.continueStory('id', 0, 'option');
      expect(component.gameEvent.emit).toHaveBeenCalledWith(['hurt', false]);
    });

    it('should update modalText[] and modalChoice[]', () => {
      component.gameVars.modalText = [Story.start.text];
      component.gameVars.modalChoice = [];
      component.continueStory('start', 0, 'option');
      expect(component.gameVars.modalText[1]).toEqual(Story.path0.text);
      expect(component.gameVars.modalChoice[0]).toEqual('option');
    });

    it('should set story to Story.path0 and call decreaseHealth() when case = start0', () => {
      spyOn(component, 'decreaseHealth');
      component.gameVars.story = Story.start;
      component.continueStory('start', 0, Story.start.options[0]);
      expect(component.gameVars.story).toEqual(Story.path0);
      expect(component.decreaseHealth).toHaveBeenCalled();
    });

    it('should set story to Story.path00 when case = path00', () => {
      component.gameVars.story = Story.start;
      component.continueStory('path0', 0, Story.path0.options[0]);
      expect(component.gameVars.story).toEqual(Story.path00);
    });

    it('should set story to Story.path000 and call decreaseHealth() when case = path000', () => {
      spyOn(component, 'decreaseHealth');
      component.gameVars.story = Story.start;
      component.continueStory('path00', 0, Story.path00.options[0]);
      expect(component.gameVars.story).toEqual(Story.path000);
      expect(component.decreaseHealth).toHaveBeenCalledWith('dead');
    });

    it('should set story to Story.path001 and emit gameEvent when case = path001', () => {
      spyOn(component.gameEvent, 'emit');
      component.gameVars.story = Story.start;
      component.continueStory('path00', 1, Story.path00.options[1]);
      expect(component.gameVars.story).toEqual(Story.path001);
      expect(component.gameEvent.emit).toHaveBeenCalledWith(['light']);
    });

    it('should set story to Story.path0010 and call decreaseHealth() when case = path0010', () => {
      spyOn(component, 'decreaseHealth');
      component.gameVars.story = Story.start;
      component.continueStory('path001', 0, Story.path001.options[0]);
      expect(component.gameVars.story).toEqual(Story.path0010);
      expect(component.decreaseHealth).toHaveBeenCalled();
    });

    it('should set story to Story.path00100 when case = path00100', () => {
      component.gameVars.story = Story.start;
      component.continueStory('path0010', 0, Story.path0010.options[0]);
      expect(component.gameVars.story).toEqual(Story.path00100);
    });

    it('should set story to Story.path00101 when case = path00101', () => {
      component.gameVars.story = Story.start;
      component.continueStory('path0010', 1, Story.path0010.options[1]);
      expect(component.gameVars.story).toEqual(Story.path00101);
    });

    it('should set story to Story.path001000 when case = path001000', () => {
      component.gameVars.story = Story.start;
      component.continueStory('path00100', 0, Story.path00100.options[0]);
      expect(component.gameVars.story).toEqual(Story.path001000);
    });

    it('should set story to Story.path001000 when case = path001010', () => {
      component.gameVars.story = Story.start;
      component.continueStory('path00101', 0, Story.path00101.options[0]);
      expect(component.gameVars.story).toEqual(Story.path001000);
    });

    it('should set story to Story.path001001 and call decreaseHealth() when case = path001001', () => {
      spyOn(component, 'decreaseHealth');
      component.gameVars.story = Story.start;
      component.continueStory('path00100', 1, Story.path00100.options[1]);
      expect(component.gameVars.story).toEqual(Story.path001001);
      expect(component.decreaseHealth).toHaveBeenCalledWith('dead');
    });

    it('should set story to Story.path001001 and call decreaseHealth() when case = path001011', () => {
      spyOn(component, 'decreaseHealth');
      component.gameVars.story = Story.start;
      component.continueStory('path00101', 1, Story.path00101.options[1]);
      expect(component.gameVars.story).toEqual(Story.path001001);
      expect(component.decreaseHealth).toHaveBeenCalledWith('dead');
    });
  });
});
