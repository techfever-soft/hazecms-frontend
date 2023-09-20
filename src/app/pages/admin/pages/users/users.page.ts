import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage {
  constructor(private clientApiService: ClientApiService) {
    this.clientApiService.getRequest('users/getAll', {}).then((response) => {
      console.log(response);
    });
  }
}
