import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallDatabaseComponent } from './install-database.component';

describe('InstallDatabaseComponent', () => {
  let component: InstallDatabaseComponent;
  let fixture: ComponentFixture<InstallDatabaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallDatabaseComponent]
    });
    fixture = TestBed.createComponent(InstallDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
