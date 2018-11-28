import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { purgatoryParadiseWorldColumns, purgatoryParadiseTimeColumns, sasiStatusLabels } from 'sasi/shared/variables/global-variables';
import { ISasiWorld,
  IWorldEvents,
  IWorldValidation,
  IValidationInfo,
  IValidationDetail
} from 'sasi/shared/interfaces/world-summary.interface';
import { CoreService } from 'sasi/core/service/core.service';
import { SasiStatusTime, SasiWorldSummary } from 'sasi/shared/models/world-summary.model';

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

  statusTime: SasiStatusTime[] = [];
  worldObjects: SasiWorldSummary[] = [];
  isDataLoading = false;

  // TODO: Insert private coreService: CoreService
  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.isDataLoading = true;
    combineLatest(
      this.coreService.getPurgatorySummary(),
      this.coreService.getParadiseSummary(),
      this.coreService.getWorldEvents('purgatory'),
      this.coreService.getWorldEvents('paradise'),
      this.coreService.getWorldValidation()
    )
    .pipe(
      map(([purgatory, paradise, purgatoryEvents, paradiseEvents, validation]) =>
        this.transformWorldSummary(purgatory, paradise, purgatoryEvents, paradiseEvents, validation)))
    .subscribe((data: SasiWorldSummary[]) => {
      this.worldObjects = data;
      console.log('PurgatoryParadiseComponent::worldObjects:', this.worldObjects);
      this.isDataLoading = false;
    });
  }

  transformWorldSummary(
    purgatory: ISasiWorld,
    paradise: ISasiWorld,
    purgatoryEvents: IWorldEvents[],
    paradiseEvents: IWorldEvents[],
    validation: IWorldValidation
  ): SasiWorldSummary[] {
    this.statusTime = this.setSasiStatusTime(purgatory, paradise, validation.validationInfo);
    const purgatoryData = this.setPurgatoryData(purgatory, purgatoryEvents, validation.validationDetails);
    const paradiseData = this.setParadiseData(paradise, paradiseEvents);
    return _.merge(purgatoryData, paradiseData);
  }

  setSasiStatusTime(purgatory: ISasiWorld, paradise: ISasiWorld, validation: IValidationInfo): SasiStatusTime[] {
    return [
      {
        propertyName: 'Base Time',
        purgatoryTime: purgatory.baseTime,
        paradiseTime: paradise.baseTime,
        qSize: `<span class="span-width-3v"><b>Q size</b></span>
                <span class="span-width-3v">${validation.qSize}</span>
                <span class="span-width-3v"><b>Q ms</b></span>
                <span class="span-width-3v">${validation.qMs}</span>`
      },
      {
        propertyName: 'Last Data Update Time',
        purgatoryTime: purgatory.lastDataUpdateTime,
        paradiseTime: paradise.lastDataUpdateTime,
        qSize: `<span class="span-width-3v"><b>max</b></span>
                <span class="span-width-3v">${validation.max0}</span>
                <span class="span-width-3v"><b>max</b></span>
                <span class="span-width-3v">${validation.max1}</span>`
      },
      {
        propertyName: 'Latest Flight Actual Time',
        purgatoryTime: purgatory.latestFlightActualTime,
        paradiseTime: paradise.latestFlightActualTime,
        qSize: `<span class="span-width-3v"><b>min</b></span>
                <span class="span-width-3v">${validation.min0}</span>
                <span class="span-width-3v"><b>min</b></span>
                <span class="span-width-3v">${validation.min1}</span>`
      }
    ];
  }

  setPurgatoryData(purgatory, purgatoryEvents, validation) {
    let purgatoryData;
    purgatoryData = purgatory.topLevelObjects.map(object => {
      return {
        propertyName: object.objectName,
        purgatoryObj: object.objectCount,
        purgatoryEvents: this.getEventCount(object.objectName, purgatoryEvents),
        validationExcl: this.getValidationCount(object.objectName, validation, 'validationExcl'),
        validationFixed: this.getValidationCount(object.objectName, validation, 'validationFixed'),
        validationIEPM: this.getValidationCount(object.objectName, validation, 'validationIEPM'),
        validationOEPM: this.getValidationCount(object.objectName, validation, 'validationOEPM'),
      };
    });
    // For Total row
    purgatoryData.splice(0, 0, {
      propertyName: 'Total',
      purgatoryObj: purgatory.total,
      purgatoryEvents: this.getEventCount('Total', purgatoryEvents),
      validationExcl: this.getValidationCount('Total', validation, 'validationExcl'),
      validationFixed: this.getValidationCount('Total', validation, 'validationFixed'),
      validationIEPM: this.getValidationCount('Total', validation, 'validationIEPM'),
      validationOEPM: this.getValidationCount('Total', validation, 'validationOEPM'),
    });
    purgatoryData.splice(1, 0, {
      propertyName: 'Δ from previous world'
    });
    return purgatoryData;
  }

  setParadiseData(paradise: ISasiWorld, paradiseEvents: IWorldEvents[]) {
    let paradiseData;
    paradiseData = paradise.topLevelObjects.map(object => {
      return {
        propertyName: object.objectName,
        paradiseObj: object.objectCount,
        paradiseEvents: this.getEventCount(object.objectName, paradiseEvents),
      };
    });
    paradiseData.splice(0, 0, {
      propertyName: 'Total',
      paradiseObj: paradise.total,
      paradiseEvents: this.getEventCount('Total', paradiseEvents),
    });
    paradiseData.splice(1, 0, {
      propertyName: 'Δ from previous world',
      paradiseObj: paradise.delta,
      paradiseEvents: this.getEventCount('Δ from previous world', paradiseEvents),
    });
    return paradiseData;
  }

  getEventCount(objectName: string, purgatoryEvents: IWorldEvents[]) {
    const object = _.find(purgatoryEvents, ['propertyName', objectName]);
    return object ? object.eventCount : '--';
  }

  getValidationCount(objectName: string, purgatoryValidation: IValidationDetail[], validationType: string) {
    const object = _.find(purgatoryValidation, ['propertyName', objectName]);
    return object ? object[validationType] : '--';
  }

}
