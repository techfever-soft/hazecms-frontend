import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';

import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { HazeBreadcrumbItem } from 'src/app/core/models/interfaces/breadcrumb.interface';
import { StepperOrientation } from '@angular/cdk/stepper';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
})
export class StepsPage {
  public activationForm: FormGroup;
  public installConfigForm: FormGroup;
  public databaseSettingsForm: FormGroup;

  public stepperOrientation: Observable<StepperOrientation>;

  public installRoute: HazeBreadcrumbItem[] = [
    {
      path: '/',
      label: 'Welcome',
    },
    {
      path: '/install/steps',
      label: 'Installation',
    },
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder
  ) {
    this.activationForm = this.fb.group({
      apiKey: ['demo', Validators.required],
      apiKeyEnabled: [true, Validators.requiredTrue],
    });

    this.databaseSettingsForm = this.fb.group({
      databaseType: ['mysql'],
      host: ['localhost'],
      username: ['root'],
      password: [''],
      database: ['hazecms'],
      port: [3306],
      databaseChecked: [false, Validators.requiredTrue],
    });

    this.installConfigForm = this.fb.group({
      language: ['en'],
      timezone: [0],
      adminsList: this.fb.array([], Validators.minLength(1)),
    });

    this.stepperOrientation = this.breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }
}
