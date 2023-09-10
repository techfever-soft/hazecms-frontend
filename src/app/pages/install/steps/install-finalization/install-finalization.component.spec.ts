import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallFinalizationComponent } from './install-finalization.component';

describe('InstallFinalizationComponent', () => {
  let component: InstallFinalizationComponent;
  let fixture: ComponentFixture<InstallFinalizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallFinalizationComponent]
    });
    fixture = TestBed.createComponent(InstallFinalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
