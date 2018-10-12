import { Component, OnInit } from '@angular/core';
import { DataAgent } from 'sasi/shared/models/data-agent.model';
import { DataAgentsMock } from 'sasi-mock/data-agents.mock';

@Component({
  selector: 'app-data-report',
  templateUrl: './data-report.component.html',
  styleUrls: [
    './data-report.component.scss',
    '../../../shared/styles/box-styles.scss'
  ]
})
export class DataReportComponent implements OnInit {

  dataAgentList: DataAgent[] = DataAgentsMock;

  constructor() { }

  ngOnInit() {

  }


}
