import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationInsertComponent } from './notification-insert.component';

describe('NotificationInsertComponent', () => {
  let component: NotificationInsertComponent;
  let fixture: ComponentFixture<NotificationInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
