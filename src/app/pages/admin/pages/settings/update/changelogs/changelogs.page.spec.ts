import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelogsPage } from './changelogs.page';

describe('ChangelogsPage', () => {
  let component: ChangelogsPage;
  let fixture: ComponentFixture<ChangelogsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangelogsPage]
    });
    fixture = TestBed.createComponent(ChangelogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
