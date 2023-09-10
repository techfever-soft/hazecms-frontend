import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritePostPage } from './write-post.page';

describe('WritePostPage', () => {
  let component: WritePostPage;
  let fixture: ComponentFixture<WritePostPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WritePostPage]
    });
    fixture = TestBed.createComponent(WritePostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
