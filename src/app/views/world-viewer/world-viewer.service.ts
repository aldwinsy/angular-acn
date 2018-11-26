import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls, tenant } from 'sasi/shared/variables/global-variables';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorldViewerService {

  constructor(private http: HttpClient) { }

  getWorldObjects(world, object): Observable<any> {

    return this.http.get(`${urls.worldService}/tenant/${tenant}/type/${world}/${object}`).pipe(
      tap((data: any) => {
        console.log(`getWorldSummaryData:${world}:${object}::`, data);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: Response) {
    console.log('WorldViewerService::handleError::', error);
    const message = `Error status code ${error.status} at ${error.url}`;
    return throwError(message);
  }
}
