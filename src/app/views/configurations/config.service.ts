import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getDataServerConfigProperties(): Observable<any> {
    return this.http.get('https://api.myjson.com/bins/6ikxu').pipe(
      tap((data: any) => {
        console.log('ConfigService::getDataServerConfigProperties: ', data);
      }),
      catchError(this.handleError)
    );
  }

  updateDataServerConfigProperties(config: any): Observable<any> {
    return this.http.put('https://api.myjson.com/bins/6ikxu', config).pipe(
      tap((data: any) => {
        console.log('ConfigService::putDataServerConfigProperties: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getDataServerAgents(): Observable<any> {
    return this.http.get('https://api.myjson.com/bins/a36ki').pipe(
      tap((data: any) => {
        console.log('ConfigService::getDataServerAgents: ', data);
      }),
      catchError(this.handleError)
    );
  }

  addDataServerAgents(agent): Observable<any> {
    return this.http.post('https://api.myjson.com/bins/a36ki', agent).pipe(
      tap((data: any) => {
        console.log('ConfigService::addDataServerAgents: ', data);
      }),
      catchError(this.handleError)
    );
  }

  updateDataServerAgents(agent): Observable<any> {
    return this.http.post('https://api.myjson.com/bins/a36ki', agent).pipe(
      tap((data: any) => {
        console.log('ConfigService::updateDataServerAgents: ', data);
      }),
      catchError(this.handleError)
    );
  }

  deleteDataServerAgents(agent): Observable<any> {
    return this.http.delete('https://api.myjson.com/bins/a36ki', agent).pipe(
      tap((data: any) => {
        console.log('ConfigService::deleteDataServerAgents: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getFileAgent(): Observable<any> {
    return this.http.get('https://api.myjson.com/bins/16yivm').pipe(
      tap((data: any) => {
        console.log('ConfigService::getFileAgentConfigProperties: ', data);
      }),
      catchError(this.handleError)
    );
  }

  updateFileAgent(agent): Observable<any> {
    return this.http.put('https://api.myjson.com/bins/16yivm', agent).pipe(
      tap((data: any) => {
        console.log('ConfigService::updateFileAgent: ', data);
      }),
      catchError(this.handleError)
    );
  }

  restartFileAgent(agent): Observable<any> {
    return this.http.put('https://api.myjson.com/bins/16yivm', agent).pipe(
      tap((data: any) => {
        console.log('ConfigService::restartFileAgent: ', data);
      }),
      catchError(this.handleError)
    );
  }

  processFileAgent(agent): Observable<any> {
    return this.http.put('https://api.myjson.com/bins/16yivm', agent).pipe(
      tap((data: any) => {
        console.log('ConfigService::processFileAgent: ', data);
      }),
      catchError(this.handleError)
    );
  }

  getRestartAgent(): Observable<any> {
    return this.http.get('https://api.myjson.com/bins/vpfjm').pipe(
      tap((data: any) => {
        console.log('ConfigService::getRestartAgent: ', data);
      }),
      catchError(this.handleError)
    );
  }

  updateRestartAgent(agent): Observable<any> {
    return this.http.put('https://api.myjson.com/bins/vpfjm', agent).pipe(
      tap((data: any) => {
        console.log('ConfigService::updateRestartAgent: ', data);
      }),
      catchError(this.handleError)
    );
  }

  // fileUpload(file): Observable<any> {

  // }

  private handleError(error: Response) {
    console.log('WorldViewerService::handleError::', error);
    const message = `Error status code ${error.status} at ${error.url}`;
    return throwError(message);
  }
}
