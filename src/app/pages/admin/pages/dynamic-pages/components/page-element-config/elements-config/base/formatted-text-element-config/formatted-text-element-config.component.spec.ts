import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormattedTextElementConfigComponent } from './formatted-text-element-config.component';

describe('FormattedTextElementConfigComponent', () => {
  let component: FormattedTextElementConfigComponent;
  let fixture: ComponentFixture<FormattedTextElementConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormattedTextElementConfigComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormattedTextElementConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
