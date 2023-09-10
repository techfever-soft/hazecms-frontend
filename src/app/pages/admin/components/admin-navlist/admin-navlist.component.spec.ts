import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavlistComponent } from './admin-navlist.component';

describe('AdminNavlistComponent', () => {
  let component: AdminNavlistComponent;
  let fixture: ComponentFixture<AdminNavlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNavlistComponent]
    });
    fixture = TestBed.createComponent(AdminNavlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
