import { ConfigService } from 'sasi/views/configurations/config.service';
import { Component, OnInit } from '@angular/core';
import { restartAgentStatusLabels, restartAgentConfigLabels, sasiConfigLabels } from 'sasi/shared/variables/global-variables';

interface RestartAgentStatus {
  currentServerTime: string;
  nextRestartTime: string;
}

interface RestartAgentConfig {
  sasiDataServerUrl: string;
  agentName: string;
  restartOption: string;
  restartTime: string;
}

@Component({
  selector: 'app-config-restart-agent',
  templateUrl: './config-restart-agent.component.html',
  styleUrls: ['./config-restart-agent.component.scss']
})
export class ConfigRestartAgentComponent implements OnInit {
  readonly sasiConfigLabels = sasiConfigLabels;
  readonly restartAgentStatusLabels = restartAgentStatusLabels;
  readonly restartAgentConfigLabels = restartAgentConfigLabels;

  restartAgentConfig: RestartAgentConfig;
  restartAgentStatus: RestartAgentStatus;

  isDataLoading = false;

  constructor(private configService: ConfigService) {
    this.initializeRestartAgentProperties();
  }

  ngOnInit() {
    this.isDataLoading = true;
    this.configService.getRestartAgent().subscribe((data) => {
      Object.assign(this.restartAgentConfig, data.restartAgentConfig);
      Object.assign(this.restartAgentStatus, data.restartAgentStatus);
      this.isDataLoading = false;
    });
  }

  initializeRestartAgentProperties() {
    this.restartAgentStatus = {
      currentServerTime: '--',
      nextRestartTime: '--'
    };
    this.restartAgentConfig = {
      sasiDataServerUrl: '--',
      agentName: '--',
      restartOption: 'daily',
      restartTime: ''
    };
  }

}
