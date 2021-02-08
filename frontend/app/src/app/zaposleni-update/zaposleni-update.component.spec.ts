import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniUpdateComponent } from './zaposleni-update.component';

describe('ZaposleniUpdateComponent', () => {
  let component: ZaposleniUpdateComponent;
  let fixture: ComponentFixture<ZaposleniUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposleniUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
