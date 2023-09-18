import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParagraphElementConfigComponent } from './paragraph-element-config.component';

describe('ParagraphElementConfigComponent', () => {
  let component: ParagraphElementConfigComponent;
  let fixture: ComponentFixture<ParagraphElementConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParagraphElementConfigComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParagraphElementConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
