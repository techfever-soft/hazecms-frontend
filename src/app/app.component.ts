import { AuthService } from './core/services/auth.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UpdateService } from './core/services/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public currentUser!: any;
  public currentUserSubscription: Subscription;

  constructor(private authService: AuthService) {
    this.currentUserSubscription = this.authService.currentUser.subscribe(
      (currentUser) => {
        this.currentUser = currentUser;
      }
    );
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }
}
