import { FormBuilder, FormGroup } from '@angular/forms';

import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientApiService: ClientApiService
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  public onLogin() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.clientApiService
      .postRequest('admin/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
      });
  }
}
