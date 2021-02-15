import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllabusInsertComponent } from './syllabus-insert.component';

describe('SyllabusInsertComponent', () => {
  let component: SyllabusInsertComponent;
  let fixture: ComponentFixture<SyllabusInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllabusInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllabusInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
