![Haze Logo](https://firebasestorage.googleapis.com/v0/b/haze-cms.appspot.com/o/haze__brand-line.png?alt=media&token=b6271507-8b28-4c44-b144-63c1b8a153c0)

# 🚀 HazeCMS (front-end)

This repository contains the frontend code for a flexible and lightweight Content Management System.

Frontend part was built using Angular 16.

Backend part was built with NodeJS.

This project is still quite small and build by one developer. But I hope to make it grow with the help of the community.

> ## ⭐ [Review the CMS](https://forms.gle/Dic6dxEyeWc5iHJYA)
> ## 📖 [Read the documentation](https://docs.hazecms.com)
> #### If you want to clone the back-end server, please [go here](https://github.com/techfever-soft/hazecms-backend)

### Changelogs

v0.0.4

- [x] Added login/register for users with JWT
- [x] Added admin dashboard items
- [x] Patched update system
- [x] Added external scripts part

v0.0.3

- [x] Patched documentation link
- [x] Added admin dashboard items
- [x] Added new items to admin settings
- [x] Patched update system

v0.0.2

- [x] Added changelogs
- [x] Added update settings
- [x] Added dynamic pages
- [x] Added example homepage and blog

v0.0.1

- [x] Patched blog
- [x] Patched admin menu

#

### Front-end features

- [x] **Content Management System**
- [x] **User-Friendly Interface**
- [x] **Visual page builder** (DEMO, for the moment)
- [x] **Material Design Extended Components**
- [x] **Server-Side Rendering (SSR)**
- [x] **Customizable**
- [x] **Responsive Design**
- [ ] **Multi-language**
- [ ] **SEO Optimized**
- [ ] **Users & roles Management**
- [ ] **Advanced text editor**
- [ ] **Extensible via Plugins**

### Back-end features

- [x] **MySQL support**
- [ ] ~~MongogDB support~~
- [ ] ~~Firebase support~~
- [x] **Dynamic Pages Creation**
- [x] **API endpoints**
- [x] **Data encryption**
- [ ] **Updates management**
- [ ] **User and Admin Authentification**
- [ ] **Medias management (Image, Video and Fonts)**
- [ ] **Server Load Balancing for Scalability**
- [ ] **User Activity Logs for Auditing**
- [ ] **Extensible via Plugins**

### Haze API features

- [x] **Licence management**
- [ ] **E-commerce capacibilities**
- [ ] **Cloud storage integration**
- [ ] **Notification system**
- [ ] **Scheduled Tasks and Cron Jobs**
- [ ] **Integration with thid-party services**
- [ ] **Extensible via Plugins**

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

Please refer to [USAGE.md](https://github.com/techfever-soft/hazecms-frontend/blob/main/USAGE.md) for good practises and to setup your developement environment

### Prerequisites

- An API key to activate your CMS. [Get an API Key](https://hazecms.com).

- Access to your [HazeCMS back-end server](https://github.com/techfever-soft/hazecms-backend).

- Node.js V16+ and npm V9+ installed.

  ```bash
  node --version
  npm --version
  ```

- Angular V16+ installed globally

  ```bash
  npm i -g @angular/cli
  ```

- An available database server with an **empty database** called "hazecms" or what you want
  - MySQL (default port 3306)
    ```bash
    mysql -u root -p
    ```
  - ~~MongoDB~~
  - ~~Firestore~~

## Installation

Please refer to the [documentation](https://docs.hazecms)

## Usage

Please refer to the [documentation](https://docs.hazecms)

## Deployment

1. Replace your variables inside `src/app/environments`

2. Build and deploy code
   - Basic
     - Run `npm run build:prod`
     - Deploy your `./dist/frontend/browser` files into a web server (drag-and-drop, FTP...)
   - SSR
     - Build SSR files with `npm run build:ssr`
     - Prerender routes with `npm run prerender`
     - You can now test your application by running `node ./dist/frontend/server/main.js`
     - Deploy your `./dist/frontend/server` files into a web server (drag-and-drop, FTP...)
   - Firebase
     - Run `firebase deploy`
