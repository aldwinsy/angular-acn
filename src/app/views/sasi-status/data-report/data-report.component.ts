import { Component, OnInit, Input } from '@angular/core';
import { DataAgent } from 'sasi/shared/models/data-agent.model';
import { SasiStatusService } from 'sasi/views/sasi-status/sasi-status.service';

@Component({
  selector: 'app-data-report',
  templateUrl: './data-report.component.html',
  styleUrls: [
    './data-report.component.scss',
    '../../../shared/styles/box-styles.scss'
  ]
})
export class DataReportComponent implements OnInit {

  dataAgentList: DataAgent[] = [];
  isDataLoading = false;


  get loadingAgentsCount() {
    return this.dataAgentList.filter((agent) => agent.status === 'LOADING').length;
  }


  constructor(private sasiStatusService: SasiStatusService) { }

  ngOnInit() {
    this.isDataLoading = true;
    this.sasiStatusService.getSasiStatusAgentList()
      .subscribe(data => {
        this.dataAgentList = data;
        this.isDataLoading = false;
      });
  }

}
