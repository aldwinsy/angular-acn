import { Component, OnInit } from '@angular/core';
import {
  publishedTimeColumns,
  publishedWorldColumns,
  sasiStatusLabels,
  urls,
  PublishedStatusTimeInterface,
  PublishedWorldInterface
} from 'sasi/shared/variables/global-variables';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CoreService } from 'sasi/core/service/core.service';
import { SasiWorld } from 'sasi/shared/interfaces/world-summary.interface';

import * as _ from 'lodash';

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: [
    './published.component.scss',
    '../../../../shared/styles/box-styles.scss'
  ]
})
export class PublishedComponent implements OnInit {
  readonly sasiStatusLabels = sasiStatusLabels;
  readonly publishedTimeColumns = publishedTimeColumns;
  readonly publishedWorldColumns = publishedWorldColumns;
  readonly sasiStatusLink = '/sasi-status';

  statusTime: PublishedStatusTimeInterface[] = [];
  worldObjects: PublishedWorldInterface[] = [];
  dataAgentList = [];
  isDataLoading = false;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.isDataLoading = true;
    combineLatest(
      this.coreService.getPublishedWorld(urls.published0Summary),
      this.coreService.getPublishedWorld(urls.published1Summary),
      this.coreService.getPublishedWorld(urls.published2Summary)
    ).pipe(
      map(([published0, published1, published2]) => this.transformWorldSummary(published0, published1, published2))
    ).subscribe(data => {
      this.worldObjects = data;
      this.isDataLoading = false;
    });
  }

  transformWorldSummary(published0, published1, published2): PublishedWorldInterface[] {
    this.statusTime = this.setSasiStatusTime(published0, published1, published2);
    // Add logic for total and previous world
    const published_0 = published0.topLevelObjects.map(object => {
      return {
        propertyName: object.objectName,
        published_0_Events: '-',
        published_0_Obj: object.objectCount
      };
    });
    const published_1 = published1.topLevelObjects.map(object => {
      return {
        propertyName: object.objectName,
        published_1_Events: '-',
        published_1_Obj: object.objectCount
      };
    });
    const published_2 = published2.topLevelObjects.map(object => {
      return {
        propertyName: object.objectName,
        published_2_Events: '-',
        published_2_Obj: object.objectCount
      };
    });
    return _.merge(published_0, published_1, published_2);
  }

  setSasiStatusTime(p0: SasiWorld, p1: SasiWorld, p2: SasiWorld): PublishedStatusTimeInterface[] {
    return [
      {
        propertyName: 'Base Time',
        published_0_Time: p0.baseTime,
        published_1_Time: p1.baseTime,
        published_2_Time: p2.baseTime
      },
      {
        propertyName: 'Last Data Update Time',
        published_0_Time: p0.lastDataUpdateTime,
        published_1_Time: p1.lastDataUpdateTime,
        published_2_Time: p2.lastDataUpdateTime
      },
      {
        propertyName: 'Latest Flight Actual Time',
        published_0_Time: p0.latestFlightActualTime,
        published_1_Time: p1.latestFlightActualTime,
        published_2_Time: p2.latestFlightActualTime
      }
    ];
  }
}
