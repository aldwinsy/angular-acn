import { Component, OnInit } from '@angular/core';
import { sasiConfigLabels, dataServerAgentsLabels, dataServerAdminLabels } from 'sasi/shared/variables/global-variables';

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
  dataAgentColumnObjects = [
    {
      propName: 'select',
      label: 'Select'
    },
    {
      propName: 'name',
      label: 'Name'
    },
    {
      propName: 'context',
      label: 'Context'
    },
    {
      propName: 'status',
      label: 'Status'
    },
    {
      propName: 'lastAccess',
      label: 'Last Access'
    },
    {
      propName: 'requiredForDataLoad',
      label: 'Required For Data Load'
    },
    {
      propName: 'canInitiateRestart',
      label: 'Can Initiate Restart'
    },
    {
      propName: 'dataLoadSequence',
      label: 'Data Load Sequence'
    }
  ];

  dataAgentData = [
    {
      name: 'XML File Agent',
      context: 'Jul18-July30',
      status: 'EVENTING',
      lastAccess: '2018-09018 07:28:57',
      requiredForDataLoad: 'Yes',
      canInitiateRestart: 'No',
      dataLoadSequence: 0
    },
    {
      name: 'Restart Agent',
      context: '-',
      status: 'NO CONTEXT',
      lastAccess: '-',
      requiredForDataLoad: 'No',
      canInitiateRestart: 'Yes',
      dataLoadSequence: 0
    },
    {
      name: 'File Agent',
      context: 'Jul18-July30',
      status: 'EVENTING',
      lastAccess: '2018-09018 07:28:57',
      requiredForDataLoad: 'Yes',
      canInitiateRestart: 'No',
      dataLoadSequence: 0
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
