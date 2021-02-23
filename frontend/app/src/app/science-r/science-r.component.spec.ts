import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceRComponent } from './science-r.component';

describe('ScienceRComponent', () => {
  let component: ScienceRComponent;
  let fixture: ComponentFixture<ScienceRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScienceRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
