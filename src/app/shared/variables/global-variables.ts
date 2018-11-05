/* This file contains all constant variables which is reusable accross all pages */

export const appTitle: String = 'SASI 2.0';

export const geLogoImgSrc = 'http://www.stickpng.com/assets/images/5847f7ffcef1014c0b5e48a6.png';

export const geFooter = '© 2018 GENERAL ELECTRIC';

export const headerNavItems = [
  {
    id: 'sasi-status',
    label: 'STATUS'
  },
  {
    id: 'world-viewer',
    label: 'WORLD VIEWER'
  },
  {
    id: 'dps',
    label: 'DPS'
  },
  {
    id: 'config',
    label: 'CONFIG'
  },
  {
    id: 'documentation',
    label: 'DOCUMENTATION'
  }
];

// @TODO: change to actual urls when endpoints are available
export const urls = {
  dataStatus: 'api/v1/data-status',
  worldObjects: 'api/v1/world-objects',
  dataAgents: 'api/v1/data-agents'
};

export const worldSummaryColumns = [
  {
    propName: 'propertyName',
    label: 'World Summary'
  },
  {
    propName: 'count',
    label: 'Total'
  },
];

export const purgatoryParadiseTimeColumns = [
  {
    propName: 'propertyName',
    label: 'World'
  },
  {
    propName: 'purgatoryTime',
    label: 'Purgatory'
  },
  {
    propName: 'qSize',
    label: 'Validation',
    type: 'html'
  },
  {
    propName: 'paradiseTime',
    label: 'Paradise'
  }
];

export const purgatoryParadiseWorldColumns = [
  {
    propName: 'propertyName',
    label: ''
  },
  {
    propName: 'purgatoryEvents',
    label: 'Events'
  },
  {
    propName: 'purgatoryObj',
    label: 'Objects'
  },
  {
    propName: 'validationIEPM',
    label: 'IEPM'
  },
  {
    propName: 'validationExcl',
    label: 'Excl.'
  },
  {
    propName: 'validationFixed',
    label: 'Fixed'
  },
  {
    propName: 'validationOEPM',
    label: 'OEPM'
  },
  {
    propName: 'paradiseEvents',
    label: 'Events'
  },
  {
    propName: 'paradiseObj',
    label: 'Objects'
  }
];

export const publishedTimeColumns = [
  {
    propName: 'propertyName',
    label: 'World'
  },
  {
    propName: 'published_0_Time',
    label: 'Published-0'
  },
  {
    propName: 'published_1_Time',
    label: 'Published-1'
  },
  {
    propName: 'published_2_Time',
    label: 'Published-2'
  }
];

export const publishedWorldColumns = [
  {
    propName: 'propertyName',
    label: ''
  },
  {
    propName: 'published_0_Events',
    label: 'Events'
  },
  {
    propName: 'published_0_Obj',
    label: 'Objects'
  },
  {
    propName: 'published_1_Events',
    label: 'Events'
  },
  {
    propName: 'published_1_Obj',
    label: 'Objects'
  },
  {
    propName: 'published_2_Events',
    label: 'Events'
  },
  {
    propName: 'published_2_Obj',
    label: 'Objects'
  }
];

export const sasiStatusLabels = {
  dataStatus: 'Data Satus',
  dataAgent: 'Data Agent Report',
  purgatoryParadise: 'Purgatory/Paradise',
  published: 'Published'
};

export const sasiStatusCardLabels = {
  purgatory: 'Purgatory',
  paradise: 'Paradise',
  published: 'Published',
  count: 'count',
  changes: 'Δ',
  lastUpdateTimeIcon: 'schedule',
  latestFlightTimeIcon: 'flight_takeoff',
  detailsButton: 'See Details'
};

export const dataAgentCardLabels = {
  status: 'Status',
  context: 'Context',
  lastRequest: 'Last Request',
  errorIcon: 'error_outline',
  xmlAgentIcon: 'description',
  customAgentIcon: 'flight_takeoff',
  restartAgentIcon: 'history'
};

export const configNavItems = [
  {
    id: '/config/data-server',
    label: 'DATA SERVER'
  },
  {
    id: '/config/file-agent',
    label: 'XML FILE AGENT'
  },
  {
    id: '/config/restart-agent',
    label: 'RESTART AGENT'
  },
  {
    id: '/config/file-upload',
    label: 'FILE UPLOAD'
  }
];

export const sasiConfigLabels = {
  processingParameters: 'Processing Parameters',
  dataAgents: 'Data Agents',
  dataServerAdmin: 'Data Server Administration',
  processingInfo: 'Processing Information',
  restartStatus: 'Status',
  restartConfig: 'Configuration',
};

export const dataServerParametersLabels = {
  title: 'SASI Parameter',
  sasiHost: 'SASI Host',
  sasiHostPlaceHolder: 'Host',
  sasiHostErrMsg: 'Valid host is required',
  agentName: 'Agent Name',
  agentNamePlaceholder: 'Name',
  agentNameErrMsg: 'Valid name is required',
  worldRefFile: 'World/Reference File',
  worldRefFilePlaceholder: 'File',
  worldRefFileErrMsg: 'Valid file is required',
  eventSrcDirectory: 'Event Source Directory',
  eventSrcDirectoryPlaceHolder: 'Source',
  eventSrcDirectoryErrMsg: 'Valid source is required',
  noteTitle: 'Note',
  notes: [
    'The directory must be in the same machine where the agent is running.',
    'The agent name must be in the list of Data Agents found in the SASI Admin Page.',
    `The agent 'Can Initiate Restart' must be set to Yes in the SASI Admin page if the World/Reference file has value.`
  ],
  stopBtn: 'Stop',
  startBtn: 'Start'
};

export const dataServerAgentsLabels = {
  title: 'Data Agents',
  restartBtn: 'Restart',
  processBtn: 'Process Files'
};

export const fileAgentServerAdminLabels = {
  sasiConfigTitle: 'SASI Configuration Properties',
  propertyDropdownPlaceholder: 'Property',
  propertyValuePlaceholder: 'Value',
  baseDateTime: 'Base Date/Time',
  baseDateTimePlaceholder: 'yyyy-MM-dd HH:mm',
  timeMode: 'Time Mode',
  timeModeDropdownPlaceHolder: 'Property',
  dataWindowSettingsTitle: 'Data Window Settings',
  daysBackward: 'Days Backward',
  daysForward: 'Days Forward',
  stopBtn: 'Stop',
  startBtn: 'Start'
};

export const fileAgentProcessingInfoLabels = {
  title: 'Data Agent Status',
  stoppedStatusIcon: 'cancel',
  runningStatusIcon: 'check_circle',
  idleStatusIcon: 'timelapse',
  restartBtn: 'Restart Agent',
  processBtn: 'Process Files'
};

export const restartAgentStatusLabels = {
  title: 'Status',
  currentServerTime: 'Current Server Time',
  nextRestartTime: 'Next Restart Time'
};

export const restartAgentConfigLabels = {
  title: 'Configuration',
  sasiDataServerUrl: 'SASI Data Server URL',
  agentName: 'Agent Name',
  restartOption: 'Restart Option',
  restartOptionDropdownPlaceholder: 'Option',
  restartOptionTime: 'Restart Option',
  restartOptionTimePlaceholder: 'HH:mm',
  saveBtn: 'Save',
  cancelBtn: 'Cancel'
};
