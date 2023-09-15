import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPagesPage } from './dynamic-pages.page';

describe('DynamicPagesPage', () => {
  let component: DynamicPagesPage;
  let fixture: ComponentFixture<DynamicPagesPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicPagesPage]
    });
    fixture = TestBed.createComponent(DynamicPagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
