import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectMaterialInsertComponent } from './subject-material-insert.component';

describe('SubjectMaterialInsertComponent', () => {
  let component: SubjectMaterialInsertComponent;
  let fixture: ComponentFixture<SubjectMaterialInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectMaterialInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectMaterialInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
