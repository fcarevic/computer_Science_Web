import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityProjectInsertComponent } from './university-project-insert.component';

describe('UniversityProjectInsertComponent', () => {
  let component: UniversityProjectInsertComponent;
  let fixture: ComponentFixture<UniversityProjectInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityProjectInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityProjectInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
