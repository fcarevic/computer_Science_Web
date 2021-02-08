import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectNotificationInsertComponent } from './subject-notification-insert.component';

describe('SubjectNotificationInsertComponent', () => {
  let component: SubjectNotificationInsertComponent;
  let fixture: ComponentFixture<SubjectNotificationInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectNotificationInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectNotificationInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
