import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ButtonElementConfigComponent } from './button-element-config.component';

describe('ButtonElementConfigComponent', () => {
  let component: ButtonElementConfigComponent;
  let fixture: ComponentFixture<ButtonElementConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonElementConfigComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonElementConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
