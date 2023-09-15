import { ClientApiService } from 'src/app/core/services/client-api.service';
import { Component } from '@angular/core';
import { DataResponse } from 'src/app/core/models/interfaces/responses.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public availablePages: any[] = [];

  constructor(private clientApiService: ClientApiService) {
    this.clientApiService.getRequest('pages/getAll', {}).then((response) => {
      const result = response as DataResponse;
      this.availablePages = result.data as any[];
      console.log(this.availablePages);
    });
  }
}
