import { Component, OnInit, Input } from '@angular/core';
import { worldSummaryColumns, worldViewerLabels } from 'sasi/shared/variables/global-variables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-panel',
  templateUrl: './summary-panel.component.html',
  styleUrls: [
    './summary-panel.component.scss',
    '../../../../shared/styles/box-styles.scss'
  ]
})
export class SummaryPanelComponent implements OnInit {
  readonly worldSummaryColumns = worldSummaryColumns;
  readonly worldViewerLabels = worldViewerLabels;
  @Input() worldSummaryData = [];


  constructor(private router: Router) { }

  ngOnInit() {

  }

  goToResults(details) {
    const parameters = Object.assign({
      world: details['cellColumn'],
      resultsToBeViewed: details['rowDetails']['objectName']
    });
    this.router.navigate(['world-viewer/search-results', parameters]);
  }

}
