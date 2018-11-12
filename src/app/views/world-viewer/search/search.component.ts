import { Component, OnInit } from '@angular/core';
import { WorldViewerService } from 'sasi/views/world-viewer/world-viewer.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

interface WorldSummaryInterface {
  propertyName: string;
  purgatoryCount: number;
  paradiseCount: number;
}

class WorldSummaryModel {
  worldSummaryData: WorldSummaryInterface[];
  constructor(purgatory, paradise) {
    const purgatoryData = purgatory.topLevelObjects.map(object => {
      return {
        propertyName: object.objectName,
        purgatoryCount: object.objectCount
      };
    });
    const paradiseData = paradise.topLevelObjects.map(object => {
      return {
        propertyName: object.objectName,
        paradiseCount: object.objectCount
      };
    });
    this.worldSummaryData = _.merge(purgatoryData, paradiseData);
  }
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [
    './search.component.scss',
    '../../../shared/styles/box-styles.scss'
  ]
})
export class SearchComponent implements OnInit {
  worldSummaryData: WorldSummaryInterface[];
  isDataLoading = false;
  constructor(private worldViewerservice: WorldViewerService) {}

  ngOnInit() {
    this.getWorldSummaryData();
  }

  getWorldSummaryData() {
    this.isDataLoading = true;
    combineLatest(
      this.worldViewerservice.getWorldSummaryData(),
      this.worldViewerservice.getWorldSummaryData()
    ).pipe(
      map(([purgatory, paradise]) => new WorldSummaryModel(purgatory, paradise))
    ).subscribe(data => {
      this.worldSummaryData = data.worldSummaryData;
      this.isDataLoading = false;
    });
  }

}
