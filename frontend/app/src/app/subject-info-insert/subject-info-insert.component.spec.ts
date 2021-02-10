import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectInfoInsertComponent } from './subject-info-insert.component';

describe('SubjectInfoInsertComponent', () => {
  let component: SubjectInfoInsertComponent;
  let fixture: ComponentFixture<SubjectInfoInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectInfoInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectInfoInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
