import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalMenuStudentComponent } from './vertical-menu-student.component';

describe('VerticalMenuStudentComponent', () => {
  let component: VerticalMenuStudentComponent;
  let fixture: ComponentFixture<VerticalMenuStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalMenuStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalMenuStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
