import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-agents',
  templateUrl: './data-agents.component.html',
  styleUrls: [
    './data-agents.component.scss',
    '../../../../shared/styles/box-styles.scss'
  ]
})
export class DataAgentsComponent implements OnInit {
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