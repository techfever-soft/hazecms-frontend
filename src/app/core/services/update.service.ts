import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import packageJson from '../../../../package.json';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  private updateReady: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private currentVersionTag: BehaviorSubject<string> =
    new BehaviorSubject<string>('0.0.0');
  private lastVersionTag: BehaviorSubject<string> = new BehaviorSubject<string>(
    '0.0.0'
  );

  constructor(private http: HttpClient) {
    this.checkForUpdates();
    this.currentVersionTag.next(packageJson.version);
  }

  public getIsUpdateReady() {
    return this.updateReady.asObservable();
  }

  public getCurrentVersionTag() {
    return this.currentVersionTag.asObservable();
  }

  public getLatestVersionTag() {
    return this.lastVersionTag.asObservable();
  }

  public getChangelogs() {}

  private checkForUpdates() {
    this.http
      .get(
        'https://api.github.com/repos/techfever-soft/hazecms-frontend/releases'
      )
      .subscribe((response) => {
        const releases = response as any[];
        const lastRelease = releases[0];

        if (lastRelease && lastRelease.tag_name !== packageJson.version) {
          console.log('update ready');

          this.lastVersionTag.next(lastRelease.tag_name);

          this.updateReady.next(true);
        } else {
          this.updateReady.next(false);
        }
      });
  }
}
