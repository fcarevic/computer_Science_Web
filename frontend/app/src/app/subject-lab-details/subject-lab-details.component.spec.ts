import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectLabDetailsComponent } from './subject-lab-details.component';

describe('SubjectLabDetailsComponent', () => {
  let component: SubjectLabDetailsComponent;
  let fixture: ComponentFixture<SubjectLabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectLabDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectLabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
