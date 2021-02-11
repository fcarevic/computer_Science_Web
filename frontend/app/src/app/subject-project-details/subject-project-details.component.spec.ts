import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectProjectDetailsComponent } from './subject-project-details.component';

describe('SubjectProjectDetailsComponent', () => {
  let component: SubjectProjectDetailsComponent;
  let fixture: ComponentFixture<SubjectProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectProjectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
