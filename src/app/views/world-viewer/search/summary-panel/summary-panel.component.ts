import { Component, OnInit, Input } from '@angular/core';
import { worldSummaryColumns } from 'sasi/shared/variables/global-variables';

@Component({
  selector: 'app-summary-panel',
  templateUrl: './summary-panel.component.html',
  styleUrls: [
    './summary-panel.component.scss',
    '../../../../shared/styles/box-styles.scss'
  ]
})
export class SummaryPanelComponent implements OnInit {
  worldSummaryColumns = worldSummaryColumns;

  @Input() worldSummaryData = [];


  constructor() { }

  ngOnInit() {

  }

}
