import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalMenuAdminComponent } from './vertical-menu-admin.component';

describe('VerticalMenuAdminComponent', () => {
  let component: VerticalMenuAdminComponent;
  let fixture: ComponentFixture<VerticalMenuAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalMenuAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalMenuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
