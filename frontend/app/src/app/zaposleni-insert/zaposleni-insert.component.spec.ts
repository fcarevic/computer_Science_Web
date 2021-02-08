import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniInsertComponent } from './zaposleni-insert.component';

describe('ZaposleniInsertComponent', () => {
  let component: ZaposleniInsertComponent;
  let fixture: ComponentFixture<ZaposleniInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposleniInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
