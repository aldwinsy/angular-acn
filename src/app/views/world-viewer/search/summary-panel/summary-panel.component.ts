import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary-panel',
  templateUrl: './summary-panel.component.html',
  styleUrls: [
    './summary-panel.component.scss',
    '../../../../shared/styles/box-styles.scss'
  ]
})
export class SummaryPanelComponent implements OnInit {
  worldSummaryColumnObjects = [
    {
      propName: 'propertyName',
      label: 'World Summary'
    },
    {
      propName: 'count',
      label: 'Total'
    },
   ];

  @Input() worldSummaryData;


  constructor() { }

  ngOnInit() {

  }

}
