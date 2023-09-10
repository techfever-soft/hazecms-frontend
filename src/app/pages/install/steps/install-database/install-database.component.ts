import { Component, Input } from '@angular/core';

import { BasicResponse } from 'src/app/core/models/interfaces/responses.interface';
import { ClientApiService } from 'src/app/core/services/client-api.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-install-database',
  templateUrl: './install-database.component.html',
  styleUrls: ['./install-database.component.scss'],
})
export class InstallDatabaseComponent {
  @Input('form') public databaseSettingsForm!: FormGroup;
  public activationStatus!: BasicResponse | null;
  public isChecking: boolean = false;

  constructor(private clientApiService: ClientApiService) {}

  public onSubmitDatabaseSettings() {
    this.activationStatus = null;
    this.isChecking = true;

    const databaseType = this.databaseSettingsForm.get('databaseType')?.value;
    const databaseConfig = {
      host: this.databaseSettingsForm.get('host')?.value,
      username: this.databaseSettingsForm.get('username')?.value,
      password: this.databaseSettingsForm.get('password')?.value,
      database: this.databaseSettingsForm.get('database')?.value,
      port: this.databaseSettingsForm.get('port')?.value,
    };

    console.log(databaseConfig);

    const requestEndpoint = 'install/' + databaseType + '/checkAvailability';

    this.clientApiService
      .postRequest(requestEndpoint, databaseConfig)
      .then((res) => {
        console.log(res);
        this.activationStatus = res as BasicResponse;

        this.isChecking = false;

        this.databaseSettingsForm.get('databaseChecked')?.patchValue(true);
      })
      .catch((e) => {
        console.log(e);
        this.activationStatus = e as BasicResponse;

        this.isChecking = false;
      });
  }
}
