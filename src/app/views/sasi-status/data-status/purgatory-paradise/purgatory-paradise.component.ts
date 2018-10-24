import { Component, OnInit } from '@angular/core';
import { purgatoryTimeColumns, purgatoryWorldColumns } from 'sasi/shared/variables/global-variables';
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

  sasiStatusTimeColumns = purgatoryTimeColumns;
  sasiStatusWorldColumns = purgatoryWorldColumns;

  readonly sasiStatusLink = '/sasi-status';

  statusTime = [];
  worldObjects = [];
  dataAgentList = [];

  constructor(private sasiStatusService: SasiStatusService) { }

  ngOnInit() {
    this.sasiStatusService.getSasiStatusTime()
      .subscribe(data => this.statusTime = data);

    this.sasiStatusService.getSasiStatusWorldObjects()
      .subscribe(data => this.worldObjects = data);
  }

}
