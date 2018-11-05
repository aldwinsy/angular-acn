import { Component, OnInit } from '@angular/core';
import { SasiStatusService } from 'sasi/views/sasi-status/sasi-status.service';
import { publishedTimeColumns, publishedWorldColumns, sasiStatusLabels } from 'sasi/shared/variables/global-variables';

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
        this.statusTime = data;
        this.isDataLoading = false;
      });
  }
}
