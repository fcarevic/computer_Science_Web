import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusUpdateComponent } from './syllabus-update.component';

describe('SyllabusUpdateComponent', () => {
  let component: SyllabusUpdateComponent;
  let fixture: ComponentFixture<SyllabusUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllabusUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
