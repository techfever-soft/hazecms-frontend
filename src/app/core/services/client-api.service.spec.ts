import { ClientApiService } from './client-api.service';
import { TestBed } from '@angular/core/testing';

describe('ClientApiService', () => {
  let service: ClientApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
