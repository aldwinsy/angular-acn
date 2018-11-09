import {
  aircraftMock,
  airportMock,
  airportGroupMock,
  airportGroupRelationshipMock,
  ATCControlledStationMOck,
  crewMock, crewBaseMock,
  fleetCompatibilityMock,
  fleetMock,
  flightMock,
  flightActivityMock,
  interSegmentTimeMock,
  maintenanceMock,
  marketMock,
  nonFlyMock,
  offlineTransportationMock,
  pairingMock,
  passengerConnectionMock,
  positionMock,
  qualificationMock,
  subfleetMock,
  trainingMock
} from 'sasi/shared/mock/world-objects-mock';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urls, worldSummaryProperties } from 'sasi/shared/variables/global-variables';
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

  getWorldObjects(type): Observable<any> {
    // @TODO: uncomment when actual endpoint is available
    // return this.http.get(url).pipe(
    //   tap((data: any) => {
    //     console.log('getWorldSummaryData: ', data);
    //   }),
    //   catchError(this.handleError)
    // );
    let data;
    switch (type) {
      case worldSummaryProperties.aircraft:
        data = aircraftMock;
        break;
      case worldSummaryProperties.airport:
        data = airportMock;
        break;
      case worldSummaryProperties.airportGroup:
        data = airportGroupMock;
        break;
      case worldSummaryProperties.airportGroupRelationship:
        data = airportGroupRelationshipMock;
        break;
      case worldSummaryProperties.atcControlledStation:
        data = ATCControlledStationMOck;
        break;
      case worldSummaryProperties.crew:
        data = crewMock;
        break;
      case worldSummaryProperties.crewBase:
        data = crewBaseMock;
        break;
      case worldSummaryProperties.fleetCompatibility:
        data = fleetCompatibilityMock;
        break;
      case worldSummaryProperties.fleet:
        data = fleetMock;
        break;
      case worldSummaryProperties.flight:
        data = flightMock;
        break;
      case worldSummaryProperties.flightActivity:
        data = flightActivityMock;
        break;
      case worldSummaryProperties.interSegmentTime:
        data = interSegmentTimeMock;
        break;
      case worldSummaryProperties.maintenance:
        data = maintenanceMock;
        break;
      case worldSummaryProperties.market:
        data = marketMock;
        break;
      case worldSummaryProperties.nonFly:
        data = nonFlyMock;
        break;
      case worldSummaryProperties.offlineTransportation:
        data = offlineTransportationMock;
        break;
      case worldSummaryProperties.pairing:
        data = pairingMock;
        break;
      case worldSummaryProperties.passsengerConnection:
        data = passengerConnectionMock;
        break;
      case worldSummaryProperties.position:
        data = positionMock;
        break;
      case worldSummaryProperties.qualification:
        data = qualificationMock;
        break;
      case worldSummaryProperties.sublfeet:
        data = subfleetMock;
        break;
      case worldSummaryProperties.training:
        data = trainingMock;
        break;
    }
    return of(data);
  }

  private handleError(error: Response) {
    console.log('WorldViewerService::handleError::', error);
    const message = `Error status code ${error.status} at ${error.url}`;
    return throwError(message);
  }
}
