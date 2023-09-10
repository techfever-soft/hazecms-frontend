import { Component, Input } from '@angular/core';

import { BasicResponse } from 'src/app/core/models/interfaces/responses.interface';
import { FormGroup } from '@angular/forms';
import { ServerApiService } from 'src/app/core/services/server-api.service';

@Component({
  selector: 'app-install-activation',
  templateUrl: './install-activation.component.html',
  styleUrls: ['./install-activation.component.scss'],
})
export class InstallActivationComponent {
  @Input('form') public activationForm!: FormGroup;
  public activationStatus!: BasicResponse | null;
  public isChecking: boolean = false;

  constructor(private serverApiService: ServerApiService) {}

  public onSubmitKey() {
    this.activationStatus = null;
    this.isChecking = true;

    const apiKeyInput = this.activationForm.get('apiKey')?.value;

    const requestEndPoint = 'licence/checkLicence';
    const requestData = {
      apiKey: apiKeyInput,
    };

    this.serverApiService
      .postRequest(requestEndPoint, requestData)
      .then((res) => {
        console.log(res);

        this.activationStatus = res as BasicResponse;

        this.activationForm.get('apiKeyEnabled')?.patchValue(true);

        this.isChecking = false;
      })
      .catch((e) => {
        console.log(e);

        this.activationStatus = e as BasicResponse;

        this.isChecking = false;
      });
  }
}
