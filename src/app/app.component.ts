import { AuthService } from './core/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public currentUser: any;

  constructor(private authService: AuthService) {
    // this.authService.getCurrentUser().subscribe((currentUser) => {
    //   this.currentUser = currentUser;
    // });
  }

  onLogout() {
    // this.authService.logOut();
  }
}
