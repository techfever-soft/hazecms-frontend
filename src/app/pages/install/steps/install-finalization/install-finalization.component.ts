import { Component, Input } from '@angular/core';
import {
  HazeAppConfig,
  HazeAppConfigAdmin,
} from 'src/app/core/interfaces/app.interface';

import { BasicStatus } from 'src/app/core/interfaces/status.interface';
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
  public activationStatus!: BasicStatus;
  public isInstalling: boolean = false;

  public removeFrontendInstallCode = `
  /**
   * frontend/src/pages/pages-routing.module.ts
   * 
   * NOTE: Remove these routes
   */
  
  {
    path: '',
    redirectTo: 'install',
    pathMatch: 'full',
  },
  {
    path: 'install',
    loadChildren: () =>
      import('./install/install.module').then((m) => m.InstallModule),
  },

  /**
   * frontend/src/pages/install
   * 
   * NOTE: Remove this folder
   */

  ...
  `;

  public removeBackendInstallCode = `
  /**
   * backend/routes.ts
   * 
   * NOTE: Remove these routes
   */

  router.use("/api/v1/install/mysql/", mySQLInstallRoutes);
  router.use("/api/v1/install/mongodb/", mongoDBInstallRoutes);
  router.use("/api/v1/install/firestore/", firestoreInstallRoutes);

  /**
   * backend/src/routes/mysql_install.routes.ts
   * 
   * NOTE: Remove this file
   */

  router.post("/finalizeInstall", (req, res) => {
    mySQLInstallController.finalizeInstall(req, res);
  });

  ...
  
  /**
   * backend/src/routes/mongodb_install.routes.ts
   * 
   * NOTE: Remove this file
   */

  router.post("/finalizeInstall", (req, res) => {
    mongoDBInstallController.finalizeInstall(req, res);
  });

  ...
  
  /**
   * backend/src/routes/firestore_install.routes.ts
   * 
   * NOTE: Remove this file
   */

  router.post("/finalizeInstall", (req, res) => {
    firestoreInstallController.finalizeInstall(req, res);
  });

  ...
  `;

  constructor(private clientApiService: ClientApiService) {}

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
          this.activationStatus = res as BasicStatus;
          this.isInstalling = false;
        })
        .catch((e) => {
          console.log(e);
          this.activationStatus = e as BasicStatus;
          this.isInstalling = false;
        });
    }, 1500);
  }
}
