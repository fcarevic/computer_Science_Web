import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectInfoUpdateComponent } from './subject-info-update.component';

describe('SubjectInfoUpdateComponent', () => {
  let component: SubjectInfoUpdateComponent;
  let fixture: ComponentFixture<SubjectInfoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectInfoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectInfoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
