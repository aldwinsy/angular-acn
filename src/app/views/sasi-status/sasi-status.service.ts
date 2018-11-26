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

  // private handleError(error: Response) {
  //   console.log('SasiStatusService::handleError::', error);
  //   const message = `Error status code ${error.status} at ${error.url}`;
  //   return throwError(message);
  // }
}
