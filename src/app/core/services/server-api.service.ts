import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BasicResponse } from '../models/interfaces/responses.interface';

const baseUrl = environment.coreAPIUrl;

@Injectable({
  providedIn: 'root',
})
export class ServerApiService {
  constructor(private http: HttpClient) {}

  private handleError(errorResponse: HttpErrorResponse) {
    return new Promise((resolve) => {
      switch (errorResponse.status) {
        case 0:
          resolve(<BasicResponse>{
            type: 'error',
            message: 'Server unreachable',
            code: errorResponse.error.code,
          });
          break;
        default:
          resolve(<BasicResponse>{
            type: 'error',
            message: errorResponse.error.message,
            code: errorResponse.error.code,
          });
      }
    });
  }

  /**
   * A basic get request sent to your backend server
   * @param endPoint string
   * @param data any
   * @returns Promise<Object>
   */
  public getRequest(endPoint: string, params: any) {
    return new Promise((resolve, reject) => {
      this.http
        .get(baseUrl + endPoint, {
          params: params,
        })
        .pipe(
          catchError(async (errorResponse: HttpErrorResponse) => {
            const errorHandled = await this.handleError(errorResponse);
            reject(errorHandled);
            throw new Error(errorResponse.message);
          })
        )
        .subscribe((response) => {
          resolve(response);
        });
    });
  }

  public postRequest(endPoint: string, data: any) {
    return new Promise((resolve, reject) => {
      this.http
        .post(baseUrl + endPoint, data)
        .pipe(
          catchError(async (errorResponse: HttpErrorResponse) => {
            const errorHandled = await this.handleError(errorResponse);
            reject(errorHandled);
            throw new Error(errorResponse.message);
          })
        )
        .subscribe((response) => {
          resolve(response);
        });
    });
  }
}
