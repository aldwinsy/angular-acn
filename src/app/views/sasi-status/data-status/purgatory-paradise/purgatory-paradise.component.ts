import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { purgatoryParadiseWorldColumns, purgatoryParadiseTimeColumns, sasiStatusLabels } from 'sasi/shared/variables/global-variables';
import { SasiStatusService } from 'sasi/views/sasi-status/sasi-status.service';
import { SasiWorldInterface } from 'sasi/shared/interfaces/world-summary.interface';
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

  statusTime = [];
  worldObjects = [];
  dataAgentList = [];
  isDataLoading = false;

  // TODO: Insert private coreService: CoreService
  constructor(private coreService: CoreService, private sasiStatusService: SasiStatusService) { }

  ngOnInit() {
    this.isDataLoading = true;
    this.sasiStatusService.getSasiStatusTime()
      .subscribe(data => {
        this.statusTime = data;
    });

    combineLatest(
      this.coreService.getPurgatorySummary(),
      this.coreService.getParadiseSummary()
    )
    .pipe(map(([purgatory, paradise]) => this.transformWorldSummary(purgatory, paradise)))
    .subscribe(data => {
      this.worldObjects = data;
      console.log('this.worldObjects', this.worldObjects);
      this.isDataLoading = false;
    });
  }

  transformWorldSummary(purgatory: SasiWorldInterface, paradise: SasiWorldInterface) {
    // Add logic for total and previous world
    const purgatoryData = purgatory.topLevelObjects.map(object => {
      return {
        propertyName: object.objectName,
        purgatoryObj: object.objectCount,
        paradiseEvents: '-',
        published_0_Events: '-',
        published_0_Obj: '-',
        published_1_Events: '-',
        published_1_Obj: '-',
        published_2_Events: '-',
        published_2_Obj: '-',
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
        paradiseObj: object.objectCount
      };
    });
    return _.merge(purgatoryData, paradiseData);
  }

}
