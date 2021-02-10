import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectInfoDetailsComponent } from './subject-info-details.component';

describe('SubjectInfoDetailsComponent', () => {
  let component: SubjectInfoDetailsComponent;
  let fixture: ComponentFixture<SubjectInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectInfoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
