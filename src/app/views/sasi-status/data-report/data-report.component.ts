import { Component, OnInit, Input } from '@angular/core';
import { DataAgent } from 'sasi/shared/models/data-agent.model';
import { sasiStatusLabels, dataAgentCardLabels } from 'sasi/shared/variables/global-variables';
import { CoreService } from 'sasi/core/service/core.service';
import { map } from 'rxjs/operators';
import * as _ from 'lodash/fp';

@Component({
  selector: 'app-data-report',
  templateUrl: './data-report.component.html',
  styleUrls: [
    './data-report.component.scss',
    '../../../shared/styles/box-styles.scss'
  ]
})
export class DataReportComponent implements OnInit {
  readonly dataReportLabel = sasiStatusLabels.dataAgent;
  readonly dataAgentCardLabels = dataAgentCardLabels;

  dataAgentList: DataAgent[] = [];
  isDataLoading = false;

  get loadingAgentsCount() {
    return this.dataAgentList.filter((agent) => agent.status === 'LOADING').length;
  }

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.isDataLoading = true;
    this.coreService.getDataAgentList()
      .pipe(
        // map(data => new DataAgent(data)) --> This will just map an object and returns object, not the list of objects
        map(dataAgents => {
          return _.map(dataAgent => new DataAgent(dataAgent), dataAgents);
        }),
      )
      .subscribe(
        (data: DataAgent[]) => {
          this.dataAgentList = data;
          this.isDataLoading = false;
        }
      );
  }

}
