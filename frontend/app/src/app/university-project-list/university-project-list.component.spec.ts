import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityProjectListComponent } from './university-project-list.component';

describe('UniversityProjectListComponent', () => {
  let component: UniversityProjectListComponent;
  let fixture: ComponentFixture<UniversityProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityProjectListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
