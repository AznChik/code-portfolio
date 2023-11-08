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
});
