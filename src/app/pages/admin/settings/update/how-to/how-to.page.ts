import { Component } from '@angular/core';
import { HazeBreadcrumbItem } from 'src/app/core/models/interfaces/breadcrumb.interface';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.page.html',
  styleUrls: ['./how-to.page.scss'],
})
export class HowToPage {
  public settingsPageRoute: HazeBreadcrumbItem[] = [
    {
      path: '/admin/settings',
      label: 'Settings',
    },
    {
      path: '/admin/settings/update',
      label: 'Update settings',
    },
    {
      path: '/admin/settings/update/how-to',
      label: 'How to update',
    },
  ];

  public hardCopyInstructions = `
  cd ~/ 
  rsync -av --exclude='node_modules' ./frontend/ ./frontend_save-09-15-2023/
  `;

  public softCopyInstructions = `
  cd ~/
  git add .
  git commit -m "save before update"
  git push -u
  `;
}
