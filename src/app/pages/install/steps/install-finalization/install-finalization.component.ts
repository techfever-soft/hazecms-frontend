import { Component, Input } from '@angular/core';
import {
  HazeAppConfig,
  HazeAppConfigAdmin,
} from 'src/app/core/models/interfaces/app.interface';
import { Route, Router } from '@angular/router';

import { BasicResponse } from 'src/app/core/models/interfaces/responses.interface';
import { ClientApiService } from 'src/app/core/services/client-api.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-install-finalization',
  templateUrl: './install-finalization.component.html',
  styleUrls: ['./install-finalization.component.scss'],
})
export class InstallFinalizationComponent {
  @Input('activation') activationForm!: FormGroup;
  @Input('database') databaseForm!: FormGroup;
  @Input('config') configForm!: FormGroup;
  public activationStatus!: BasicResponse;
  public isInstalling: boolean = false;

  public removeFrontendInstallCode = `
  /**
   * frontend/src/pages/install
   * 
   * NOTE: Remove this folder for security reasons
   */
  . . .

  /**
   * frontend/src/pages/pages-routing.module.ts
   * 
   * NOTE: Remove these routes and change the redirectTo
   */
  
  // NOTE: Changing
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // NOTE: Removing
  {
    path: 'install',
    loadChildren: () =>
      import('./install/install.module').then((m) => m.InstallModule),
  },

  `;

  public removeBackendInstallCode = `
  /**
   * backend/routes.ts
   * 
   * NOTE: Remove these routes for security reasons
   */

  router.use("/api/v1/install/%databaseType%/", %databaseType%InstallRoutes);
  . . .

  /**
   * backend/src/routes/%databaseType%_install.routes.ts
   * 
   * NOTE: Remove these files for security reasons
   */
  . . .

  /**
   * backend/src/controllers/%databaseType%/install.controller.ts
   * 
   * NOTE: Remove these files for security reasons
   */
  . . .
  
  /**
   * backend/src/services/%databaseType%/install.service.ts
   * 
   * NOTE: Remove these files for security reasons
   */
  . . .

  `;

  constructor(
    private clientApiService: ClientApiService,
    private router: Router
  ) {}

  private replaceCurrentRouterConfig() {
    return new Promise<void>((resolve, reject) => {
      const routes = this.router.config.slice();

      routes.forEach((route, index) => {
        if (route.redirectTo?.includes('install')) {
          routes.splice(index, 1);
        }
        if (route.path?.includes('install')) {
          routes.splice(index, 1);
        }
      });

      routes.unshift({
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      });

      this.router.resetConfig(routes);

      resolve();
    });
  }

  public onFinalizeInstallation() {
    this.isInstalling = true;

    const installAppForm: HazeAppConfig = {
      activation: {
        apiKey: this.activationForm.get('apiKey')?.value,
      },
      database: {
        databaseType: this.databaseForm.get('databaseType')?.value,
        host: this.databaseForm.get('host')?.value,
        username: this.databaseForm.get('username')?.value,
        password: this.databaseForm.get('password')?.value,
        database: this.databaseForm.get('database')?.value,
        port: this.databaseForm.get('port')?.value,
      },
      config: {
        language: this.configForm.get('language')?.value,
        timezone: this.configForm.get('timezone')?.value,
        adminsList: this.configForm.get('adminsList')
          ?.value as HazeAppConfigAdmin[],
      },
    };

    console.log(installAppForm);

    const requestEndpoint =
      'install/' + installAppForm.database.databaseType + '/finalizeInstall';

    setTimeout(() => {
      this.clientApiService
        .postRequest(requestEndpoint, installAppForm)
        .then((res) => {
          console.log(res);
          this.activationStatus = res as BasicResponse;

          this.replaceCurrentRouterConfig().then(() => {
            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 3000);
          });

          this.isInstalling = false;
        })
        .catch((e) => {
          console.log(e);
          this.activationStatus = e as BasicResponse;
          this.isInstalling = false;
        });
    }, 1500);
  }
}
