import { Component, OnInit } from '@angular/core';
import { SasiStatusService } from 'sasi/views/sasi-status/sasi-status.service';
import { publishedTimeColumns, publishedWorldColumns } from 'sasi/shared/variables/global-variables';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: [
    './published.component.scss',
    '../../../../shared/styles/box-styles.scss'
  ]
})
export class PublishedComponent implements OnInit {

  publishedTimeColumns = publishedTimeColumns;
  publishedWorldColumns = publishedWorldColumns;

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
