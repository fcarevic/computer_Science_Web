import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectExamListComponent } from './subject-exam-list.component';

describe('SubjectExamListComponent', () => {
  let component: SubjectExamListComponent;
  let fixture: ComponentFixture<SubjectExamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectExamListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectExamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
