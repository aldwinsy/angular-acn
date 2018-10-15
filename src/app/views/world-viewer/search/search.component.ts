import { Component, OnInit } from '@angular/core';
import { WorldViewerService } from 'sasi/views/world-viewer/world-viewer.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [
    './search.component.scss',
    '../../../shared/styles/box-styles.scss'
  ]
})
export class SearchComponent implements OnInit {
  worldSummaryData = [];

  constructor(private worldViewerservice: WorldViewerService) {}

  ngOnInit() {
    this.getWorldSummaryData();
  }

  getWorldSummaryData() {
    this.worldViewerservice.getWorldSummaryData()
      .subscribe(data => this.worldSummaryData = data);
  }

}
