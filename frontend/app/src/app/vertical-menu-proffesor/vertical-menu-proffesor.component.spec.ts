import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalMenuProffesorComponent } from './vertical-menu-proffesor.component';

describe('VerticalMenuProffesorComponent', () => {
  let component: VerticalMenuProffesorComponent;
  let fixture: ComponentFixture<VerticalMenuProffesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalMenuProffesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalMenuProffesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
