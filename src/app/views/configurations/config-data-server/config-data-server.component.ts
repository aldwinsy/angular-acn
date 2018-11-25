import { combineLatest } from 'rxjs';
import { ConfigService } from 'sasi/views/configurations/config.service';
import { Component, OnInit } from '@angular/core';
import {
  sasiConfigLabels,
  dataServerAgentsLabels,
  dataServerAdminLabels,
  dataAgentColumnObjects
} from 'sasi/shared/variables/global-variables';

interface DataServerProperties {
  property: string;
  propertyValue: string;
  baseDateTime: string;
  timeMode: string;
  daysBackward: number;
  daysForward: number;
}

@Component({
  selector: 'app-config-data-server',
  templateUrl: './config-data-server.component.html',
  styleUrls: [
    './config-data-server.component.scss',
    '../../../shared/styles/box-styles.scss'
  ]
})
export class ConfigDataServerComponent implements OnInit {

  readonly sasiConfigLabels = sasiConfigLabels;
  readonly dataServerAdminLabels = dataServerAdminLabels;
  readonly dataServerAgentsLabels = dataServerAgentsLabels;
  readonly dataAgentColumnObjects = dataAgentColumnObjects;

  dataAgents = [];
  dataServerProperties: DataServerProperties;

  isDataLoading = false;

  constructor(
    private configService: ConfigService
  ) {
    this.initializeDataServerProperties();
  }

  ngOnInit() {
    this.isDataLoading = true;
    combineLatest(
      this.configService.getDataServerConfigProperties(),
      this.configService.getDataServerAgents()
    ).subscribe(([configProperties, agents]) => {
        Object.assign(this.dataServerProperties, configProperties);
        this.dataAgents = agents;
        this.isDataLoading = false;
      }
    );
  }

  initializeDataServerProperties() {
    this.dataServerProperties = {
      property: '',
      propertyValue: '',
      baseDateTime: '',
      timeMode: '',
      daysBackward: 0,
      daysForward: 0,
    };
  }

}
