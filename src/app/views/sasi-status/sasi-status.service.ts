import { dataAgentsMock } from 'sasi-mock/data-agents.mock';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { dataStatus } from 'sasi-mock/data-status.mock';
import { sasiWorldObjects } from 'sasi-mock/sasi-world-objects-mock';
import { urls } from 'sasi/shared/variables/global-variables';

@Injectable({
  providedIn: 'root'
})
export class SasiStatusService {

  constructor(
    private http: HttpClient
  ) { }

  getSasiStatusTime(): Observable<any[]> {
    // @TODO: uncomment when actual endpoint is available
    const url = 'https://api.myjson.com/bins/1hhimc';
    return this.http.get(url).pipe(
      tap((data: any) => {
        console.log('getSasiStatusTime: ', data);
      }),
      catchError(this.handleError)
    );
    // return of(dataStatus);
  }

  getSasiStatusWorldObjects(): Observable<any[]> {
    // @TODO: uncomment when actual endpoint is available
    const url = 'https://api.myjson.com/bins/1blbqc';
    return this.http.get(url).pipe(
      tap((data: any) => {
        console.log('getSasiStatusWorldObjects: ', data);
      }),
      catchError(this.handleError)
    );
    // return of(sasiWorldObjects);
  }

  getSasiStatusAgentList(): Observable<any[]> {
    // @TODO: uncomment when actual endpoint is available
    const url = 'https://api.myjson.com/bins/1bq978';
    return this.http.get(url).pipe(
      tap((data: any) => {
        console.log('getSasiStatusAgentList: ', data);
      }),
      catchError(this.handleError)
    );
    // return of(dataAgentsMock);
  }

  private handleError(error: Response) {
    console.log('SasiStatusService::handleError::', error);
    const message = `Error status code ${error.status} at ${error.url}`;
    return throwError(message);
  }
}
