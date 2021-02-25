import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniCsvInsertComponent } from './zaposleni-csv-insert.component';

describe('ZaposleniCsvInsertComponent', () => {
  let component: ZaposleniCsvInsertComponent;
  let fixture: ComponentFixture<ZaposleniCsvInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniCsvInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposleniCsvInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
