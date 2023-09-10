import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallConfigComponent } from './install-config.component';

describe('InstallConfigComponent', () => {
  let component: InstallConfigComponent;
  let fixture: ComponentFixture<InstallConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallConfigComponent]
    });
    fixture = TestBed.createComponent(InstallConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
