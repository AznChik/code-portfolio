import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe('AppComponent', () => {
    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ AppComponent ]
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
    });

    it('should create app', () => {
      expect(app).toBeTruthy();
    });
});
