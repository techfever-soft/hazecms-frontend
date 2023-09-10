import {
  Auth,
  EmailAuthProvider,
  signInWithCredential,
  signInWithCustomToken,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import {
  BasicResponse,
  DataResponse,
} from 'src/app/core/models/interfaces/responses.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { ServerApiService } from 'src/app/core/services/server-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public loginForm: FormGroup;
  public loginResponse!: BasicResponse | null;

  constructor(private fb: FormBuilder, private afAuth: Auth) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  public onLogin() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    // TODO: Login

    //   if (this.loginForm.valid) {
    //     this.loginResponse = null;

    //     const email = this.loginForm.get('email')?.value;
    //     const password = this.loginForm.get('password')?.value;
    //     signInWithEmailAndPassword(this.afAuth, email, password)
    //       .then((res) => {
    //         console.log(res);

    //         this.loginResponse = {
    //           type: 'success',
    //           message: 'Logged in successfuly',
    //         };
    //       })
    //       .catch((e) => {
    //         console.log(e);

    //         switch (e.code) {
    //           case 'auth/invalid-email':
    //             this.loginResponse = {
    //               type: 'error',
    //               message: 'Invalid email',
    //             };
    //             break;
    //           case 'auth/invalid-password':
    //             this.loginResponse = {
    //               type: 'error',
    //               message: 'Invalid password',
    //             };
    //             break;
    //           case 'auth/missing-password':
    //             this.loginResponse = {
    //               type: 'error',
    //               message: 'Missing password',
    //             };
    //             break;
    //           case 'auth/user-not-found':
    //             this.loginResponse = {
    //               type: 'error',
    //               message: 'Account not found',
    //             };
    //             break;
    //           case 'auth/wrong-password':
    //             this.loginResponse = {
    //               type: 'error',
    //               message: 'Wrong password',
    //             };
    //             break;
    //           default:
    //             this.loginResponse = {
    //               type: 'error',
    //               message: 'Unknown error',
    //             };
    //         }
    //       });
    //   }
  }
}
