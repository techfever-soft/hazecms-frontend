import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediasPage } from './medias.page';

describe('MediasPage', () => {
  let component: MediasPage;
  let fixture: ComponentFixture<MediasPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediasPage]
    });
    fixture = TestBed.createComponent(MediasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
