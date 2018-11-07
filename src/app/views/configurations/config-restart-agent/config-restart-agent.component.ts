import { Component, OnInit } from '@angular/core';
import { restartAgentStatusLabels, restartAgentConfigLabels, sasiConfigLabels } from 'sasi/shared/variables/global-variables';

@Component({
  selector: 'app-config-restart-agent',
  templateUrl: './config-restart-agent.component.html',
  styleUrls: ['./config-restart-agent.component.scss']
})
export class ConfigRestartAgentComponent implements OnInit {
  readonly sasiConfigLabels = sasiConfigLabels;
  readonly restartAgentStatusLabels = restartAgentStatusLabels;
  readonly restartAgentConfigLabels = restartAgentConfigLabels;

  constructor() { }

  ngOnInit() {
  }

}
