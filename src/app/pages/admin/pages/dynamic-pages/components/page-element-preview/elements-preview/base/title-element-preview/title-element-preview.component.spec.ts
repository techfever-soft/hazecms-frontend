import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TitleElementPreviewComponent } from './title-element-preview.component';

describe('TitleElementPreviewComponent', () => {
  let component: TitleElementPreviewComponent;
  let fixture: ComponentFixture<TitleElementPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleElementPreviewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TitleElementPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
