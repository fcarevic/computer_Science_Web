import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniDetailsComponent } from './zaposleni-details.component';

describe('ZaposleniDetailsComponent', () => {
  let component: ZaposleniDetailsComponent;
  let fixture: ComponentFixture<ZaposleniDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposleniDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
