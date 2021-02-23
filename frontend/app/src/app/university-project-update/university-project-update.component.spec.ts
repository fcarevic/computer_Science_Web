import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityProjectUpdateComponent } from './university-project-update.component';

describe('UniversityProjectUpdateComponent', () => {
  let component: UniversityProjectUpdateComponent;
  let fixture: ComponentFixture<UniversityProjectUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityProjectUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityProjectUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
