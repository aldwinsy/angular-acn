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

  resultsColumns: any[] = [];
  resultsData: any[] = [];

  searchParams: Object;

  isDataLoading = false;

  constructor(
    private route: ActivatedRoute,
    private worldViewerService: WorldViewerService
    ) {
    this.route.params.subscribe(params => {
      if (params) {
        this.searchParams = params;
        this.world = params['world'];
        this.object = params['resultsToBeViewed'];
        this.resultsColumns = this.getResultsColumn(this.object);
      }
    });
  }

  ngOnInit() {
    this.isDataLoading = true;
    this.worldViewerService.getWorldObjects(this.world, this.object).subscribe(data => {
      this.resultsData = data;
      this.isDataLoading = false;
    });
  }

  getResultsColumn(objecttype) {
    switch (objecttype) {
      case worldSummaryProperties.aircraft:
        return aircraftResultsColumn;
      case worldSummaryProperties.airport:
        return airportResultsColumn;
      case worldSummaryProperties.airportGroup:
        return airportGroupResultsColumn;
      case worldSummaryProperties.airportGroupRelationship:
        return airportGroupRelationshipResultsColumn;
      case worldSummaryProperties.atcControlledStation:
        return atcControlledStationResultsColumn;
      case worldSummaryProperties.crew:
        return crewResultsColumn;
      case worldSummaryProperties.crewBase:
        return crewBaseResultsColumn;
      case worldSummaryProperties.fleetCompatibility:
        return fleetCompatibilityResultsColumn;
      case worldSummaryProperties.fleet:
        return fleetResultsColumn;
      case worldSummaryProperties.flight:
        return flightResultsColumn;
      case worldSummaryProperties.flightActivity:
        return flightActivityResultsColumn;
      case worldSummaryProperties.interSegmentTime:
        return interSegmentTimeResultsColumn;
      case worldSummaryProperties.maintenance:
        return maintenanceResultsColumn;
      case worldSummaryProperties.market:
        return marketResultsColumn;
      case worldSummaryProperties.nonFly:
        return nonFlyResultsColumn;
      case worldSummaryProperties.offlineTransportation:
        return offlineTransportationResultsColumn;
      case worldSummaryProperties.pairing:
        return pairingResultsColumn;
      case worldSummaryProperties.passsengerConnection:
        return passengerConnectionResultsColumn;
      case worldSummaryProperties.position:
        return positionResultsColumn;
      case worldSummaryProperties.qualification:
        return qualificationResultsColumn;
      case worldSummaryProperties.sublfeet:
        return subfleetResultsColumn;
      case worldSummaryProperties.training:
        return trainingResultsColumn;
    }
  }

}
