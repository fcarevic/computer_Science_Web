import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectMaterialListComponent } from './subject-material-list.component';

describe('SubjectMaterialListComponent', () => {
  let component: SubjectMaterialListComponent;
  let fixture: ComponentFixture<SubjectMaterialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectMaterialListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
