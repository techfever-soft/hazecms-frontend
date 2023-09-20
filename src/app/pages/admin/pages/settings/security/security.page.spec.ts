import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPage } from './security.page';

describe('SecurityPage', () => {
  let component: SecurityPage;
  let fixture: ComponentFixture<SecurityPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityPage]
    });
    fixture = TestBed.createComponent(SecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
