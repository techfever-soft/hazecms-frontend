import { FormBuilder, FormGroup } from '@angular/forms';

import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  public registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientApiService: ClientApiService
  ) {
    this.registerForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
    });
  }

  public onRegister() {
    this.clientApiService
      .postRequest('users/addOne', this.registerForm.value)
      .then((response) => {
        console.log(response);
      });
  }
}
