import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectNotificationUpdateComponent } from './subject-notification-update.component';

describe('SubjectNotificationUpdateComponent', () => {
  let component: SubjectNotificationUpdateComponent;
  let fixture: ComponentFixture<SubjectNotificationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectNotificationUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectNotificationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
