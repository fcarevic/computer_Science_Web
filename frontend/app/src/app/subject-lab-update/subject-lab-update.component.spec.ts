import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectLabUpdateComponent } from './subject-lab-update.component';

describe('SubjectLabUpdateComponent', () => {
  let component: SubjectLabUpdateComponent;
  let fixture: ComponentFixture<SubjectLabUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectLabUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectLabUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
