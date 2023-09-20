import { BehaviorSubject } from 'rxjs';
import { ClientApiService } from './client-api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser$: BehaviorSubject<any | undefined> = new BehaviorSubject<
    any | undefined
  >(undefined);
  public currentUser = this.currentUser$.asObservable();

  constructor(private clientApiService: ClientApiService) {
    this.getCurrentUser();
  }

  public getCurrentUser() {
    const token = this.getAuthToken();

    if (token) {
      this.clientApiService
        .getRequest('users/getCurrentUser?token=' + token, {})
        .then((response) => {
          const result = response as any;
          const data = result.data as any;
          this.currentUser$.next(data.user);
          console.log(data.user);
        });
    }
  }

  public regenerateToken() {
    this.clientApiService.getRequest('users/refreshToken', {}).then((res) => {
      console.log(res);
    });
  }

  // Méthode pour enregistrer le jeton d'authentification dans sessionStorage
  setAuthToken(token: string): void {
    sessionStorage.setItem('authToken', token);
    this.getCurrentUser();
  }

  // Méthode pour récupérer le jeton d'authentification depuis sessionStorage
  getAuthToken(): string | null {
    return sessionStorage.getItem('authToken');
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    const authToken = this.getAuthToken();
    return authToken !== null && authToken !== '';
  }

  // Méthode pour se déconnecter (effacer le jeton d'authentification)
  logout(): void {
    sessionStorage.removeItem('authToken');
    this.currentUser$.next(undefined);
  }
}
