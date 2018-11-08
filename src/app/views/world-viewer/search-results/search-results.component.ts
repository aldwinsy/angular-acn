import { WorldViewerService } from 'sasi/views/world-viewer/world-viewer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  worldSummaryProperties,
  fleetResultsColumn,
  atcControlledStationResultsColumn,
  aircraftResultsColumn,
  airportResultsColumn,
  airportGroupResultsColumn,
  airportGroupRelationshipResultsColumn,
  crewResultsColumn,
  crewBaseResultsColumn,
  fleetCompatibilityResultsColumn,
  flightResultsColumn,
  flightActivityResultsColumn,
  interSegmentTimeResultsColumn,
  maintenanceResultsColumn,
  marketResultsColumn,
  nonFlyResultsColumn,
  offlineTransportationResultsColumn,
  pairingResultsColumn,
  passengerConnectionResultsColumn,
  positionResultsColumn,
  qualificationResultsColumn,
  subfleetResultsColumn,
  trainingResultsColumn
} from 'sasi/shared/variables/global-variables';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: [
    './search-results.component.scss',
    '../../../shared/styles/box-styles.scss'
  ]
})
export class SearchResultsComponent implements OnInit {
  world: string;
  object: string;

  resultsColumns: any[];
  resultsData: any[];

  constructor(
    private route: ActivatedRoute,
    private worldViewerService: WorldViewerService
    ) {
    this.route.params.subscribe(params => {
      if (params) {
        this.world = params['world'];
        this.object = params['resultsToBeViewed'];
        this.getResultsColumn();
      }
    });
  }

  ngOnInit() {
    this.worldViewerService.getWorldObjects(this.object).subscribe(data => {
      this.resultsData = data;
    });
  }

  getResultsColumn() {
    switch (this.object) {
      case worldSummaryProperties.aircraft:
        this.resultsColumns = aircraftResultsColumn;
        break;
      case worldSummaryProperties.airport:
        this.resultsColumns = airportResultsColumn;
        break;
      case worldSummaryProperties.airportGroup:
        this.resultsColumns = airportGroupResultsColumn;
        break;
      case worldSummaryProperties.airportGroupRelationship:
        this.resultsColumns = airportGroupRelationshipResultsColumn;
        break;
      case worldSummaryProperties.atcControlledStation:
        this.resultsColumns = atcControlledStationResultsColumn;
        break;
      case worldSummaryProperties.crew:
        this.resultsColumns = crewResultsColumn;
        break;
      case worldSummaryProperties.crewBase:
        this.resultsColumns = crewBaseResultsColumn;
        break;
      case worldSummaryProperties.fleetCompatibility:
        this.resultsColumns = fleetCompatibilityResultsColumn;
        break;
      case worldSummaryProperties.fleet:
        this.resultsColumns = fleetResultsColumn;
        break;
      case worldSummaryProperties.flight:
        this.resultsColumns = flightResultsColumn;
        break;
      case worldSummaryProperties.flightActivity:
        this.resultsColumns = flightActivityResultsColumn;
        break;
      case worldSummaryProperties.interSegmentTime:
        this.resultsColumns = interSegmentTimeResultsColumn;
        break;
      case worldSummaryProperties.maintenance:
        this.resultsColumns = maintenanceResultsColumn;
        break;
      case worldSummaryProperties.market:
        this.resultsColumns = marketResultsColumn;
        break;
      case worldSummaryProperties.nonFly:
        this.resultsColumns = nonFlyResultsColumn;
        break;
      case worldSummaryProperties.offlineTansportation:
        this.resultsColumns = offlineTransportationResultsColumn;
        break;
      case worldSummaryProperties.pairing:
        this.resultsColumns = pairingResultsColumn;
        break;
      case worldSummaryProperties.passsengerConnection:
        this.resultsColumns = passengerConnectionResultsColumn;
        break;
      case worldSummaryProperties.position:
        this.resultsColumns = positionResultsColumn;
        break;
      case worldSummaryProperties.qualification:
        this.resultsColumns = qualificationResultsColumn;
        break;
      case worldSummaryProperties.sublfeet:
        this.resultsColumns = subfleetResultsColumn;
        break;
      case worldSummaryProperties.training:
        this.resultsColumns = trainingResultsColumn;
        break;
    }
  }

}
