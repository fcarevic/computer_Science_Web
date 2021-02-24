import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectGroupsCreateComponent } from './subject-groups-create.component';

describe('SubjectGroupsCreateComponent', () => {
  let component: SubjectGroupsCreateComponent;
  let fixture: ComponentFixture<SubjectGroupsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectGroupsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectGroupsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
