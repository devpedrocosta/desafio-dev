import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as data '[]' empty array`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.data).toEqual([]);
  });

  it(`should newProcess set data '[]' empty array`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.newProcess();
    fixture.detectChanges();
    expect(app.data).toEqual([]);
  });

  it(`should sendComplete set information on  data `, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.sendComplete([{name:12}]);
    fixture.detectChanges();
    expect(app.data).toEqual([{name:12}]as any);
  });

});
