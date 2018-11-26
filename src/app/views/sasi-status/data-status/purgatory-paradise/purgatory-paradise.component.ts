import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { purgatoryParadiseWorldColumns, purgatoryParadiseTimeColumns, sasiStatusLabels } from 'sasi/shared/variables/global-variables';
import { SasiStatusService } from 'sasi/views/sasi-status/sasi-status.service';
import { SasiWorldInterface, SasiWorldSummary, SasiStatusTimeInterface } from 'sasi/shared/interfaces/world-summary.interface';
import { CoreService } from 'sasi/core/service/core.service';

@Component({
  selector: 'app-purgatory',
  templateUrl: './purgatory-paradise.component.html',
  styleUrls: [
    './purgatory-paradise.component.scss',
    '../../../../shared/styles/box-styles.scss'
  ]
})
export class PurgatoryParadiseComponent implements OnInit {

  readonly sasiStatusTimeColumns = purgatoryParadiseTimeColumns;
  readonly sasiStatusWorldColumns = purgatoryParadiseWorldColumns;
  readonly sasiStatusLabels = sasiStatusLabels;
  readonly sasiStatusLink = '/sasi-status';

  statusTime: SasiStatusTimeInterface[] = [];
  worldObjects: SasiWorldSummary[] = [];
  dataAgentList = [];
  isDataLoading = false;

  // TODO: Insert private coreService: CoreService
  constructor(private coreService: CoreService, private sasiStatusService: SasiStatusService) { }

  ngOnInit() {
    this.isDataLoading = true;
    combineLatest(
      this.coreService.getPurgatorySummary(),
      this.coreService.getParadiseSummary()
    )
    .pipe(
      map(([purgatory, paradise]) => this.transformWorldSummary(purgatory, paradise)))
    .subscribe((data: SasiWorldSummary[]) => {
      this.worldObjects = data;
      console.log('PurgatoryParadiseComponent::worldObjects:', this.worldObjects);
      this.isDataLoading = false;
    });
  }

  transformWorldSummary(purgatory: SasiWorldInterface, paradise: SasiWorldInterface): SasiWorldSummary[] {
    this.statusTime = this.setSasiStatusTime(purgatory, paradise);
    // Add logic for total and previous world
    const purgatoryData = purgatory.topLevelObjects.map(object => {
      return {
        propertyName: object.objectName,
        purgatoryObj: object.objectCount,
        purgatoryEvents: '-',
        validationExcl: '-',
        validationFixed: '-',
        validationIEPM: '-',
        validationOEPM: '-'
      };
    });
    const paradiseData = paradise.topLevelObjects.map(object => {
      return {
        propertyName: object.objectName,
        paradiseObj: object.objectCount,
        paradiseEvents: '-',
      };
    });
    return _.merge(purgatoryData, paradiseData);
  }

  setSasiStatusTime(purgatory: SasiWorldInterface, paradise: SasiWorldInterface): SasiStatusTimeInterface[] {
    return [
      {
        propertyName: 'Base Time',
        purgatoryTime: purgatory.baseTime,
        paradiseTime: paradise.baseTime,
        qSize: `<span class="span-width-3v"><b>Q size</b></span>
                <span class="span-width-3v">0</span>
                <span class="span-width-3v"><b>Q ms</b></span>
                <span class="span-width-3v">0</span>`
      },
      {
        propertyName: 'Last Data Update Time',
        purgatoryTime: purgatory.lastDataUpdateTime,
        paradiseTime: paradise.lastDataUpdateTime,
        qSize: `<span class="span-width-3v"><b>max</b></span>
                <span class="span-width-3v">100</span>
                <span class="span-width-3v"><b>max</b></span>
                <span class="span-width-3v">0</span>`
      },
      {
        propertyName: 'Latest Flight Actual Time',
        purgatoryTime: purgatory.latestFlightActualTime,
        paradiseTime: paradise.latestFlightActualTime,
        qSize: `<span class="span-width-3v"><b>min</b></span>
                <span class="span-width-3v">0</span>
                <span class="span-width-3v"><b>min</b></span>
                <span class="span-width-3v">0</span>`
      }
    ];
  }

}
