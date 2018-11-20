import { Component, OnInit } from '@angular/core';
import { sasiConfigLabels, fileAgentProcessingInfoLabels, fileAgentParametersLabels } from 'sasi/shared/variables/global-variables';


@Component({
  selector: 'app-config-file-agent',
  templateUrl: './config-file-agent.component.html',
  styleUrls: [
    './config-file-agent.component.scss',
    '../../../shared/styles/box-styles.scss'
  ]
})
export class ConfigFileAgentComponent implements OnInit {
  readonly sasiConfigLabels = sasiConfigLabels;
  readonly fileAgentParametersLabels = fileAgentParametersLabels;
  readonly fileAgentProcessingInfoLabels = fileAgentProcessingInfoLabels;

  agentStatus = [
    {
      name: 'World Loading',
      status: 'STOPPED',
    },
    {
      name: 'Event Recording',
      status: 'RUNNING',
    },
    {
      name: 'Event Processing',
      status: 'IDLE',
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
