import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { SasiWorld, WorldEvents, WorldValidation } from 'sasi/shared/interfaces/world-summary.interface';
import { DataAgent } from 'sasi/shared/interfaces/data-agent.interface';
import { urls, tenant } from 'sasi/shared/variables/global-variables';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  getPurgatorySummary(): Observable<SasiWorld> {
    return this.http.get(urls.purgatorySummary).pipe(
      tap((data: SasiWorld) => {
        console.log('CoreService::getPurgatorySumary: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getParadiseSummary(): Observable<SasiWorld> {
    return this.http.get(urls.paradiseSummary).pipe(
      tap((data: SasiWorld) => {
        console.log('CoreService::getPardiseSummary: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getPublishedWorld(url: string): Observable<SasiWorld> {
    return this.http.get(url).pipe(
      tap((data: SasiWorld) => {
        console.log('CoreService::getPublishedWorld: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getDataAgentList(): Observable<DataAgent[]> {
    // @TODO: uncomment when actual endpoint is available
    return this.http.get(urls.dataAgents).pipe(
      tap((data: DataAgent[]) => {
        console.log('CoreService::getDataAgentList: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getWorldEvents(world): Observable<WorldEvents[]> {
    return this.http.get(`${urls.sasiBaseUrl}/sasi/tenant/${tenant}/type/${world}/events`).pipe(
      tap((data: WorldEvents[]) => {
        console.log('CoreService::getWorldEvents: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getWorldValidation(): Observable<WorldValidation> {
    return this.http.get(`${urls.sasiBaseUrl}/sasi/tenant/${tenant}/validation`).pipe(
      tap((data: WorldValidation) => {
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
