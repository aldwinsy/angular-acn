import { Component, OnInit } from '@angular/core';
import { purgatoryParadiseWorldColumns, purgatoryParadiseTimeColumns } from 'sasi/shared/variables/global-variables';
import { SasiStatusService } from 'sasi/views/sasi-status/sasi-status.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-purgatory',
  templateUrl: './purgatory-paradise.component.html',
  styleUrls: [
    './purgatory-paradise.component.scss',
    '../../../../shared/styles/box-styles.scss'
  ]
})
export class PurgatoryParadiseComponent implements OnInit {

  sasiStatusTimeColumns = purgatoryParadiseTimeColumns;
  sasiStatusWorldColumns = purgatoryParadiseWorldColumns;

  readonly sasiStatusLink = '/sasi-status';

  statusTime = [];
  worldObjects = [];
  isDataLoading = false;

  constructor(private sasiStatusService: SasiStatusService) { }

  ngOnInit() {
    this.isDataLoading = true;
    combineLatest(
      this.sasiStatusService.getSasiStatusTime(),
      this.sasiStatusService.getSasiStatusWorldObjects()
    ).subscribe(data => {
      this.statusTime = data[0];
      this.worldObjects = data[1];
      this.isDataLoading = false;
    });
  }

}
