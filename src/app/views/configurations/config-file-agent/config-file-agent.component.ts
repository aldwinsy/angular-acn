import { fileAgentParametersLabels } from 'sasi/shared/variables/global-variables';
import { ConfigService } from 'sasi/views/configurations/config.service';
import { Component, OnInit } from '@angular/core';
import { sasiConfigLabels, fileAgentProcessingInfoLabels } from 'sasi/shared/variables/global-variables';

interface FileAgentSASIParameters {
  sasiHost: string;
  agentName: string;
  worldRefFile: string;
  eventSourceDirectory: string;
  isStarted: boolean;
  agentStatus: FileAgentStatus;
}

interface FileAgentStatus {
  eventProcessing: string;
  eventRecording: string;
  worldLoading: string;
}

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

  fileAgentParameters: FileAgentSASIParameters;
  isDataLoading = false;

  constructor(private configService: ConfigService) {
    this.initializeFileAgentParameters();
  }

  ngOnInit() {
    this.isDataLoading = true;
    this.configService.getFileAgent().subscribe((data: any) => {
      Object.assign(this.fileAgentParameters, data);
      this.isDataLoading = false;
    });
  }

  initializeFileAgentParameters() {
    this.fileAgentParameters = {
      sasiHost: '',
      agentName: '',
      worldRefFile: '',
      eventSourceDirectory: '',
      isStarted: false,
      agentStatus: {
        eventProcessing: '--',
        eventRecording: '--',
        worldLoading: '--'
      }
    };
  }
}
