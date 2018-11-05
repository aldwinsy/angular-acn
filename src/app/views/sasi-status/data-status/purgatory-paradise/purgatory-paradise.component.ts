import { Component, OnInit } from '@angular/core';
import { purgatoryParadiseWorldColumns, purgatoryParadiseTimeColumns, sasiStatusLabels } from 'sasi/shared/variables/global-variables';
import { SasiStatusService } from 'sasi/views/sasi-status/sasi-status.service';

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

  constructor(private sasiStatusService: SasiStatusService) { }

  ngOnInit() {
    this.isDataLoading = true;
    this.sasiStatusService.getSasiStatusTime()
      .subscribe(data => {
        this.statusTime = data;
        this.isDataLoading = false;
      });

    this.sasiStatusService.getSasiStatusWorldObjects()
      .subscribe(data => {
        this.worldObjects = data;
        this.isDataLoading = false;
      });
  }

}
