import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { CoreService } from 'sasi/core/service/core.service';
import { WorldSummary, SasiWorld } from 'sasi/shared/interfaces/world-summary.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [
    './search.component.scss',
    '../../../shared/styles/box-styles.scss'
  ]
})
export class SearchComponent implements OnInit {
  worldSummaryData: WorldSummary[];
  isDataLoading = false;
  constructor(private coreService: CoreService) {}

  ngOnInit() {
    this.getWorldSummary();
  }

  getWorldSummary() {
    this.isDataLoading = true;
    combineLatest(
      this.coreService.getPurgatorySummary(),
      this.coreService.getParadiseSummary()
    ).pipe(
      map(([purgatory, paradise]) => this.transformWorldSummary(purgatory, paradise))
    ).subscribe(data => {
      this.worldSummaryData = data;
      this.isDataLoading = false;
    });
  }

  transformWorldSummary(purgatory: SasiWorld, paradise: SasiWorld): WorldSummary[] {
    const purgatoryData = purgatory.topLevelObjects.map(object => {
      return {
        objectName: object.objectName,
        purgatoryCount: object.objectCount
      };
    });
    const paradiseData = paradise.topLevelObjects.map(object => {
      return {
        objectName: object.objectName,
        paradiseCount: object.objectCount
      };
    });
    return _.merge(purgatoryData, paradiseData);
  }

}
