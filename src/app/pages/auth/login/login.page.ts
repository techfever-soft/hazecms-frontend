import {
  BasicResponse,
  DataResponse,
} from 'src/app/core/models/interfaces/responses.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';
import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public loginForm: FormGroup;
  public loginResponse!: BasicResponse | null;

  constructor(
    private fb: FormBuilder,
    private clientApiService: ClientApiService,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public onLogin() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.clientApiService
      .postRequest('users/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        const result = response as any;
        const data = result.data as any;
        this.authService.setAuthToken(data.token);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
