import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ISasiWorld, IWorldEvents, IWorldValidation } from 'sasi/shared/interfaces/world-summary.interface';
import { IDataAgent } from 'sasi/shared/interfaces/data-agent.interface';
import { urls, tenant } from 'sasi/shared/variables/global-variables';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  getPurgatorySummary(): Observable<ISasiWorld> {
    return this.http.get(urls.purgatorySummary).pipe(
      tap((data: ISasiWorld) => {
        console.log('CoreService::getPurgatorySumary: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getParadiseSummary(): Observable<ISasiWorld> {
    return this.http.get(urls.paradiseSummary).pipe(
      tap((data: ISasiWorld) => {
        console.log('CoreService::getPardiseSummary: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getPublishedWorld(url: string): Observable<ISasiWorld> {
    return this.http.get(url).pipe(
      tap((data: ISasiWorld) => {
        console.log('CoreService::getPublishedWorld: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getDataAgentList(): Observable<IDataAgent[]> {
    // @TODO: uncomment when actual endpoint is available
    return this.http.get(urls.dataAgents).pipe(
      tap((data: IDataAgent[]) => {
        console.log('CoreService::getDataAgentList: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getWorldEvents(world): Observable<IWorldEvents[]> {
    return this.http.get(`${urls.sasiBaseUrl}/sasi/tenant/${tenant}/type/${world}/events`).pipe(
      tap((data: IWorldEvents[]) => {
        console.log('CoreService::getWorldEvents: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getWorldValidation(): Observable<IWorldValidation> {
    return this.http.get(`${urls.sasiBaseUrl}/sasi/tenant/${tenant}/validation`).pipe(
      tap((data: IWorldValidation) => {
        console.log('CoreService::getWorldValidation: ', data);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    console.log('CoreService::handleError: ', error);
    const message = `Error status code ${error.status} at ${error.url}`;
    return throwError(message);
  }
}
