import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { AboutMe } from '../../common/constants';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameComponent]
    });
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleModal()', () => {
    it('should set easterEgg to false, call setClue(), and showModal() when passed a clue input', () => {
      const dialog = document.querySelector('#clue-modal') as HTMLDialogElement;
      spyOn(component, 'setClue');
      spyOn(dialog, 'showModal');
      component.easterEgg = true;
      component.toggleModal('test');
      expect(component.easterEgg).toBe(false);
      expect(component.setClue).toHaveBeenCalledWith('test');
      expect(dialog.showModal).toHaveBeenCalled();
    });

    it('should scroll to top of text when clue modal opens', () => {
      component.toggleModal('tv');
      fixture.detectChanges();
      const text = document.getElementById('text') as Element;
      spyOn(text, 'scrollTo');
      component.toggleModal('tv');
      expect(text.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    it('should close modal when not passed a clue input', () => {
      const dialog = document.querySelector('#clue-modal') as HTMLDialogElement;
      spyOn(dialog, 'close');
      component.toggleModal();
      expect(dialog.close).toHaveBeenCalled();
    });
  });

  describe('setClue()', () => {
    it('should set computer number and text when clue = computer', () => {
      component.setClue('computer');
      expect(component.clueNumber).toEqual('1');
      expect(component.clueText).toEqual(AboutMe.computer);
    });

    it('should set origami number and text when clue = origami', () => {
      component.setClue('origami');
      expect(component.clueNumber).toEqual('2');
      expect(component.clueText).toEqual(AboutMe.origami);
    });

    it('should set math number and text when clue = math', () => {
      component.setClue('math');
      expect(component.clueNumber).toEqual('3');
      expect(component.clueText).toEqual(AboutMe.math);
    });

    it('should set stitch number and text when clue = stitch', () => {
      component.setClue('stitch');
      expect(component.clueNumber).toEqual('4');
      expect(component.clueText).toEqual(AboutMe.stitch);
    });

    it('should set drawing number and text when clue = drawing', () => {
      component.setClue('drawing');
      expect(component.clueNumber).toEqual('5');
      expect(component.clueText).toEqual(AboutMe.drawing);
    });

    it('should set tv number and text when clue = tv', () => {
      component.setClue('tv');
      expect(component.clueNumber).toEqual('6');
      expect(component.clueText).toEqual(AboutMe.tv);
    });

    it('should set physicalGames number and text when clue = physical games', () => {
      component.setClue('physical games');
      expect(component.clueNumber).toEqual('7');
      expect(component.clueText).toEqual(AboutMe.physicalGames);
    });

    it('should set virtualGames number and text when clue = virtual games', () => {
      component.setClue('virtual games');
      expect(component.clueNumber).toEqual('8');
      expect(component.clueText).toEqual(AboutMe.virtualGames);
    });

    it('should set music number and text when clue = music', () => {
      component.setClue('music');
      expect(component.clueNumber).toEqual('9');
      expect(component.clueText).toEqual(AboutMe.music);
    });

    it('should set karate number and text when clue = karate', () => {
      component.setClue('karate');
      expect(component.clueNumber).toEqual('10');
      expect(component.clueText).toEqual(AboutMe.karate);
    });

    it('should set easterEgg to true, text to undefined, and emit achievementEvent when clue = easter egg', () => {
      spyOn(component.achievementEvent, 'emit');
      component.easterEgg = false;
      component.setClue('easter egg');
      expect(component.easterEgg).toBe(true);
      expect(component.clueText).toEqual(undefined);
      expect(component.achievementEvent.emit).toHaveBeenCalledWith(true);
    });
  });
});
