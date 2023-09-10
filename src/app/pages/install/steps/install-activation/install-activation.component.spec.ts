import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallActivationComponent } from './install-activation.component';

describe('InstallActivationComponent', () => {
  let component: InstallActivationComponent;
  let fixture: ComponentFixture<InstallActivationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallActivationComponent]
    });
    fixture = TestBed.createComponent(InstallActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
