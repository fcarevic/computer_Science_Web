import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectProjectUpdateComponent } from './subject-project-update.component';

describe('SubjectProjectUpdateComponent', () => {
  let component: SubjectProjectUpdateComponent;
  let fixture: ComponentFixture<SubjectProjectUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectProjectUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectProjectUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
