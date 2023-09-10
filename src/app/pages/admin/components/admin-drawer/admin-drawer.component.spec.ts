import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDrawerComponent } from './admin-drawer.component';

describe('AdminDrawerComponent', () => {
  let component: AdminDrawerComponent;
  let fixture: ComponentFixture<AdminDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDrawerComponent]
    });
    fixture = TestBed.createComponent(AdminDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
