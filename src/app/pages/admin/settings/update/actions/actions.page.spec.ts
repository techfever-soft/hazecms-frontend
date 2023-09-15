import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsPage } from './actions.page';

describe('ActionsPage', () => {
  let component: ActionsPage;
  let fixture: ComponentFixture<ActionsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsPage]
    });
    fixture = TestBed.createComponent(ActionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
