import { Component, OnInit, Input } from '@angular/core';
import { CoreService } from 'sasi/core/service/core.service';
import { sasiStatusLabels, sasiStatusCardLabels } from 'sasi/shared/variables/global-variables';
import { WorldSummary, SasiWorld } from 'sasi/shared/interfaces/world-summary.interface';
import { urls } from 'sasi/shared/variables/global-variables';
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

  // worldSummaryData: WorldSummary[];
  purgatory: SasiWorld;
  paradise: SasiWorld;
  published: SasiWorld;
  worldSummary: SasiWorld[];
  isDataLoading = false;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.isDataLoading = true;
    this.getWorldSummary();
  }

  getWorldSummary() {
    combineLatest(
      this.coreService.getPurgatorySummary(),
      this.coreService.getParadiseSummary(),
      this.coreService.getPublishedWorld(urls.published0Summary)
    ).pipe(
      map(([purgatory, paradise, published]) => {
        this.purgatory = purgatory;
        this.paradise = paradise;
        this.published = published;
        this.worldSummary = [purgatory, paradise, published];
      })
    ).subscribe(() => {
      this.isDataLoading = false;
    });
  }

}
