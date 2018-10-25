import { Component, OnInit, Input } from '@angular/core';
import { DataAgent } from 'sasi/shared/models/data-agent.model';

@Component({
  selector: 'app-data-report',
  templateUrl: './data-report.component.html',
  styleUrls: [
    './data-report.component.scss',
    '../../../shared/styles/box-styles.scss'
  ]
})
export class DataReportComponent implements OnInit {

  @Input() dataAgentList: DataAgent[] = [];


  get loadingAgentsCount() {
    return this.dataAgentList.filter((agent) => agent.status === 'LOADING').length;
  }


  constructor() { }

  ngOnInit() {

  }

}
