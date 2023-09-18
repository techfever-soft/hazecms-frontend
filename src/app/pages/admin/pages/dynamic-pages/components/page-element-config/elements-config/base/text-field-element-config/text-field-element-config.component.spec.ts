import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextFieldElementConfigComponent } from './text-field-element-config.component';

describe('TextFieldElementConfigComponent', () => {
  let component: TextFieldElementConfigComponent;
  let fixture: ComponentFixture<TextFieldElementConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFieldElementConfigComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextFieldElementConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
