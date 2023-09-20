import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BasicResponse } from '../models/interfaces/responses.interface';

const baseUrl = environment.dataAPIUrl;

@Injectable({
  providedIn: 'root',
})
export class ClientApiService {
  constructor(private http: HttpClient) {}

  /**
   * Handles request errors
   * @param errorResponse
   * @returns Promise
   */
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
   * A basic post request sent to your backend server
   * @param endPoint string
   * @param data any
   * @returns Promise
   */
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

  /**
   * A basic get request sent to your backend server
   * @param endPoint string
   * @param data any
   * @returns Promise
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

  /**
   * A basic delete request sent to your backend server
   * @param endPoint string
   * @param data any
   * @returns Promise
   */
  public deleteRequest(endPoint: string) {
    return new Promise((resolve, reject) => {
      this.http
        .delete(baseUrl + endPoint)
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
