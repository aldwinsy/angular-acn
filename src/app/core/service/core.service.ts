import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { SasiWorldInterface } from 'sasi/shared/interfaces/world-summary.interface';
import { DataAgentInterface } from 'sasi/shared/interfaces/data-agent.interface';
import { urls } from 'sasi/shared/variables/global-variables';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }

  getPurgatorySummary(): Observable<SasiWorldInterface> {
    return this.http.get(urls.purgatorySummary).pipe(
      tap((data: SasiWorldInterface) => {
        console.log('CoreService::getPurgatorySumary: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getParadiseSummary(): Observable<SasiWorldInterface> {
    return this.http.get(urls.paradiseSummary).pipe(
      tap((data: SasiWorldInterface) => {
        console.log('CoreService::getPardiseSummary: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getDataAgentList(): Observable<DataAgentInterface[]> {
    // @TODO: uncomment when actual endpoint is available
    const url = 'https://api.myjson.com/bins/ak3r2';
    // const url = 'http://localhost:8080/dataAgents';
    return this.http.get(url).pipe(
      tap((data: DataAgentInterface[]) => {
        console.log('getDataAgentList: ', data);
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
