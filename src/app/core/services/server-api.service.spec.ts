import { ServerApiService } from './server-api.service';
import { TestBed } from '@angular/core/testing';

describe('ServerApiService', () => {
  let service: ServerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
