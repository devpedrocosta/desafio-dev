import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as data '[]' empty array`, () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.componentInstance;
    expect(app.list).toEqual([]);
  });

  it(`should have a convertTime`, () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.componentInstance;
    const hora = app.convertTime('120101')
    fixture.detectChanges();
    expect(hora).toEqual('12:1:1');
  });

  it(`should have a convertdata`, () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.componentInstance;
    const data = app.convertdata('20210101')
    fixture.detectChanges();
    expect(data).toEqual('01/01/2021');
  });

  it(`should have a getFormattedPrice`, () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.componentInstance;
    const hora = app.getFormattedPrice(2021)
    fixture.detectChanges();
    expect(hora).toContain('R$');
  });

  it('should get info -> Sem dados', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.nodata').textContent).toContain('Sem Dados');
  });
});
