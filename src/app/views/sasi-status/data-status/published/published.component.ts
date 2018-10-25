import { Component, OnInit } from '@angular/core';
import { SasiStatusService } from 'sasi/views/sasi-status/sasi-status.service';
import { publishedTimeColumns, publishedWorldColumns } from 'sasi/shared/variables/global-variables';

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
  dataAgentList = [];

  constructor(private sasiStatusService: SasiStatusService) { }

  ngOnInit() {
    this.sasiStatusService.getSasiStatusTime()
      .subscribe(data => this.statusTime = data);

    this.sasiStatusService.getSasiStatusWorldObjects()
      .subscribe(data => this.worldObjects = data);
  }
}
