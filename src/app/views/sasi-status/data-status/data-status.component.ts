import { Component, OnInit, Input } from '@angular/core';
import { CoreService } from 'sasi/core/service/core.service';
import { sasiStatusLabels, sasiStatusCardLabels } from 'sasi/shared/variables/global-variables';
import { WorldSummaryInterface, SasiWorldInterface } from 'sasi/shared/interfaces/world-summary.interface';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-data-status',
  templateUrl: './data-status.component.html',
  styleUrls: [
    './data-status.component.scss',
    '../../../shared/styles/box-styles.scss'
  ]
})
export class DataStatusComponent implements OnInit {
  readonly dataStatusLabel = sasiStatusLabels.dataStatus;
  readonly sasiStatusCardLabels = sasiStatusCardLabels;
  readonly purgatoryParadiseLink = '/sasi-status/purgatory-paradise';
  readonly publishedLink = '/sasi-status/published';

  // worldSummaryData: WorldSummaryInterface[];
  purgatory: SasiWorldInterface;
  paradise: SasiWorldInterface;
  published: SasiWorldInterface;
  worldSummary: SasiWorldInterface[];
  isDataLoading = false;

  // @Input() statusTime = [];
  // @Input() worldObjects = [];

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.isDataLoading = true;
    this.getWorldSummary();
  }

  getWorldSummary() {
    combineLatest(
      this.coreService.getPurgatorySummary(),
      this.coreService.getParadiseSummary()
    ).pipe(
      map(([purgatory, paradise]) => this.transformWorldSummaryForCards(purgatory, paradise))
    ).subscribe((data: SasiWorldInterface[]) => {
      this.purgatory = data[0];
      this.paradise = data[1];
      this.worldSummary = data;
      this.isDataLoading = false;
      console.log('this.sasiWorldSummary', this.purgatory, this.paradise);
    });
  }

  transformWorldSummaryForCards(purgatory: SasiWorldInterface, paradise: SasiWorldInterface): SasiWorldInterface[] {
    /* const purgatoryData = purgatory.topLevelObjects.map(object => {
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
    }); */
    // return _.merge(purgatoryData, paradiseData);
    return _.concat(purgatory, paradise);
  }

}
