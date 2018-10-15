import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls } from 'sasi/shared/variables/global-variables';
import { worldSummaryData } from 'sasi-mock/world-summary-mock';

@Injectable({
  providedIn: 'root'
})
export class WorldViewerService {

  constructor(private http: HttpClient) { }

  getWorldSummaryData(): Observable<any> {
    // @TODO: uncomment when actual endpoint is available
    // return this.http.get(url).pipe(
    //   tap((data: any) => {
    //     console.log('getWorldSummaryData: ', data);
    //   }),
    //   catchError(this.handleError)
    // );
    return of(worldSummaryData);
  }

  private handleError(error: Response) {
    console.log('WorldViewerService::handleError::', error);
    const message = `Error status code ${error.status} at ${error.url}`;
    return throwError(message);
  }
}
