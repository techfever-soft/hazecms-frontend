import * as moment from 'moment';

import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-install-config',
  templateUrl: './install-config.component.html',
  styleUrls: ['./install-config.component.scss'],
})
export class InstallConfigComponent {
  @Input('form') public installConfigForm!: FormGroup;
  public timezoneList: any[] = [];
  public addAdminForm: FormGroup;

  constructor(private fb: FormBuilder, private configService: ConfigService) {
    this.addAdminForm = this.fb.group({
      adminEmail: ['', [Validators.required, Validators.email]],
      adminPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.patchTimezone();
  }

  public onAddAdmin() {
    (this.installConfigForm.get('adminsList') as FormArray).push(
      this.fb.control({
        email: this.addAdminForm.get('adminEmail')?.value,
        password: this.addAdminForm.get('adminPassword')?.value,
      })
    );

    this.addAdminForm.get('adminEmail')?.reset();
    this.addAdminForm.get('adminPassword')?.reset();
  }

  public onDeleteAdmin(index: number) {
    (this.installConfigForm.get('adminsList') as FormArray).removeAt(index);
  }

  private patchTimezone() {
    this.timezoneList = this.configService.getTimeZones();

    this.installConfigForm
      .get('timezone')
      ?.patchValue(this.getSelectedTimezoneIndex());
  }

  private getSelectedTimezoneIndex(): number {
    const index = this.timezoneList.findIndex((timezone) => {
      return moment().format('Z z').includes(timezone.offset);
    });
    return index;
  }
}
