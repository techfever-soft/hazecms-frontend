# Installation (for front-end)

The installation is required to create all the tables for SQL, collections for NoSQL and configure your cms-settings.json. This step is essential to setting up your HazeCMS content management system. Follow the steps below for installation.

For more detailed informations and steps, you can visit https://hazecms.com/documentation

1.  Clone the repositories to your local machine:

    ```bash
    git clone https://github.com/techfever-soft/hazecms-frontend.git
    ```

    If you haven't done so yet, clone the back-end repository

    ```bash
    git clone https://github.com/techfever-soft/hazecms-backend.git
    ```

2.  Install necessary dependencies for both front-end and back-end:

    ```bash
    cd ./frontend
    npm install

    cd ./backend
    npm install
    ```

3.  Start the development server:

    ```bash
    cd ./frontend
    npm run start
    ```

4.  Start the back-end server:

    ```bash
    cd ./backend
    npm run start
    ```

5.  Access the front-end in your browser at http://localhost:4200/

    - Follow the installation steps by clicking on "Ready for launching ?"

      1.  Activation
          - Get your API key at https://hazecms.com
          - Check and activate your key
          - Click next step
      2.  Database
          - Enter your database connection settings
          - Check your database availability
          - Click next step
      3.  Configuration
          - Define your language and timezone
          - Add administrator(s) account(s)
          - Click next step
      4.  Finalization

          - Click "Finish the installation"
          - After successfully installed, you must remove the installation code from :

          ### ⚠️ **Remove install code from Front-end (spoiler)**

             <details>
                <summary>Show code to remove</summary>

          ```typescript
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

          ```

             </details>

          ### ⚠️ **Remove install code from Back-end (spoiler)**

             <details>
                   <summary>Show code to remove</summary>

          ```typescript
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

          ```

            </details>