import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectNotificationsComponent } from './subject-notifications.component';

describe('SubjectNotificationsComponent', () => {
  let component: SubjectNotificationsComponent;
  let fixture: ComponentFixture<SubjectNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
