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
    propName: 'purgatoryCount',
    label: 'Purgatory',
    clickable: true,
  },
  {
    propName: 'paradiseCount',
    label: 'Paradise',
    clickable: true,
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
  count: 'Count',
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

export const worldViewerLabels = {
  worldView: 'World View',
  worldSearch: 'World Search'
};

export const fleetResultsColumn = [
  {
    propName: 'fleetID',
    label: 'fleetID'
  },
  {
    propName: 'crewFleetName',
    label: 'crewFleetName'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'opsFleetName',
    label: 'opsFleetName'
  },
  {
    propName: 'version',
    label: 'version'
  },
  {
    propName: 'withinFleetSwapCost',
    label: 'withinFleetSwapCost'
  }
];

export const atcControlledStationResultsColumn = [
  {
    propName: 'version',
    label: 'version'
  }
];

export const aircraftResultsColumn = [
  {
    propName: 'aircraftID',
    label: 'aircraftID'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'isCorrectiveActionRequired',
    label: 'isCorrectiveActionRequired'
  },
  {
    propName: 'subfleetID',
    label: 'subfleetID'
  },
  {
    propName: 'tail',
    label: 'tail'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const airportResultsColumn = [
  {
    propName: 'airportID',
    label: 'airportID'
  },
  {
    propName: 'airportGroupID',
    label: 'airportGroupID'
  },
  {
    propName: 'city',
    label: 'city',
  },
  {
    propName: 'code',
    label: 'code'
  },
  {
    propName: 'country',
    label: 'country'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'isAllowableSubfleets',
    label: 'isAllowableSubfleets'
  },
  {
    propName: 'isCrewCustomsCheckRequired',
    label: 'isCrewCustomsCheckRequired'
  },
  {
    propName: 'isHub',
    label: 'isHub'
  },
  {
    propName: 'isInternational',
    label: 'isInternational'
  },
  {
    propName: 'isServiced',
    label: 'isServiced'
  },
  {
    propName: 'name',
    label: 'name'
  },
  {
    propName: 'offsetGMT',
    label: 'offsetGMT'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const airportGroupResultsColumn = [
  {
    propName: 'airportGroupID',
    label: 'airportGroupID'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const airportGroupRelationshipResultsColumn = [
  {
    propName: 'airportGroupRelationshipID',
    label: 'airportGroupRelationshipID'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'inflightTokens',
    label: 'inflightTokens'
  },
  {
    propName: 'operationalTokens',
    label: 'operationalTokens'
  },
  {
    propName: 'pilotTokens',
    label: 'pilotTokens'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const crewResultsColumn = [
  {
    propName: 'crewID',
    label: 'Crew ID'
  },
  {
    propName: 'dateOfBirth',
    label: 'dateOfBirth'
  },
  {
    propName: 'employeeID',
    label: 'employeeId'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'name',
    label: 'name'
  },
  {
    propName: 'positionType',
    label: 'positionType'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const crewBaseResultsColumn = [
  {
    propName: 'baseID',
    label: 'baseID'
  },
  {
    propName: 'code',
    label: 'code'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'name',
    label: 'name'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const fleetCompatibilityResultsColumn = [
  {
    propName: 'fleetCompatibilityID',
    label: 'fleetCompatibilityID'
  },
  {
    propName: 'fleetCompatibilityType',
    label: 'fleetCompatibilityType'
  },
  {
    propName: 'fleetID',
    label: 'fleetID'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const flightResultsColumn = [
  {
    propName: 'flightID',
    label: 'flightID'
  },
  {
    propName: 'aircraftID',
    label: 'aircraftID'
  },
  {
    propName: 'arrDateTimeAct',
    label: 'arrDateTimeAct'
  },
  {
    propName: 'arrDateTimeEst',
    label: 'arrDateTimeEst'
  },
  {
    propName: 'arrDateTimeSch',
    label: 'arrDateTimeSch'
  },
  {
    propName: 'arrDate',
    label: 'arrDate'
  },
  {
    propName: 'canDeadHead',
    label: 'canDeadHead'
  },
  {
    propName: 'carriedCode',
    label: 'carriedCode'
  },
  {
    propName: 'destAirportID',
    label: 'destAirportID'
  },
  {
    propName: 'dptDateTimeAct',
    label: 'dptDateTimeAct'
  },
  {
    propName: 'dptDateTimeEst',
    label: 'dptDateTimeEst'
  },
  {
    propName: 'dptDateTimeSch',
    label: 'dptDateTimeSch'
  },
  {
    propName: 'dptGate',
    label: 'dptGate'
  },
  {
    propName: 'flightClass',
    label: 'flightClass'
  },
  {
    propName: 'flightNumber',
    label: 'flightNumber'
  },
  {
    propName: 'flightState',
    label: 'flightState'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'inControl',
    label: 'inControl'
  },
  {
    propName: 'isCancelled',
    label: 'isCancelled'
  },
  {
    propName: 'multiDepartureCode',
    label: 'multiDepartureCode'
  },
  {
    propName: 'offDateTime',
    label: 'offDateTime'
  },
  {
    propName: 'onDateTime',
    label: 'onDateTime'
  },
  {
    propName: 'operationDate',
    label: 'operationDate'
  },
  {
    propName: 'origAirportID',
    label: 'origAirportID'
  },
  {
    propName: 'serviceType',
    label: 'serviceType'
  },
  {
    propName: 'subfleetID',
    label: 'subfleetID'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const flightActivityResultsColumn = [
  {
    propName: 'flightActivityID',
    label: 'flightActivityID'
  },
  {
    propName: 'category',
    label: 'category'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'type',
    label: 'type'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const interSegmentTimeResultsColumn = [
  {
    propName: 'version',
    label: 'version'
  }
];

export const maintenanceResultsColumn = [
  {
    propName: 'maintenanceID',
    label: 'maintenanceID'
  },
  {
    propName: 'priority',
    label: 'priority'
  },
  {
    propName: 'airportID',
    label: 'airportID'
  },
  {
    propName: 'aircraftID',
    label: 'aircraftID'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'startDateTime',
    label: 'startDateTime'
  },
  {
    propName: 'endDateTime',
    label: 'endDateTime'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const marketResultsColumn = [
  {
    propName: 'marketID',
    label: 'marketID'
  },
  {
    propName: 'origAirportID',
    label: 'origAirportID'
  },
  {
    propName: 'destAirportID',
    label: 'destAirportID'
  },
  {
    propName: 'distance',
    label: 'distance'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const nonFlyResultsColumn = [
  {
    propName: 'nonflyID',
    label: 'nonflyID'
  },
  {
    propName: 'changeability',
    label: 'changeability'
  },
  {
    propName: 'code',
    label: 'code'
  },
  {
    propName: 'destAirportID',
    label: 'destAirportID'
  },
  {
    propName: 'endDateTime',
    label: 'endDateTime'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'isDutyTime',
    label: 'isDutyTime'
  },
  {
    propName: 'label',
    label: 'label'
  },
  {
    propName: 'origAirportID',
    label: 'origAirportID'
  },
  {
    propName: 'startDateTime',
    label: 'startDateTime'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const offlineTransportationResultsColumn = [
  {
    propName: 'offlineTransportationID',
    label: 'offlineTransportationID'
  },
  {
    propName: 'cost',
    label: 'cost'
  },
  {
    propName: 'destAirportID',
    label: 'destAirportID'
  },
  {
    propName: 'durationInMinutes',
    label: 'durationInMinutes'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'isCancelled',
    label: 'isCancelled'
  },
  {
    propName: 'isPenalized',
    label: 'isPenalized'
  },
  {
    propName: 'isSchedulingResource',
    label: 'isSchedulingResource'
  },
  {
    propName: 'name',
    label: 'name'
  },
  {
    propName: 'offlineTransportationType',
    label: 'offlineTransportationType'
  },
  {
    propName: 'origAirportID',
    label: 'origAirportID'
  },
  {
    propName: 'positionType',
    label: 'positionType'
  },
  {
    propName: 'startDateTime',
    label: 'startDateTime'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const pairingResultsColumn = [
  {
    propName: 'pairingID',
    label: 'pairingID'
  },
  {
    propName: 'baseID',
    label: 'baseID'
  },
  {
    propName: 'destAirportID',
    label: 'destAirportID'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'name',
    label: 'name'
  },
  {
    propName: 'origAirportID',
    label: 'origAirportID'
  },
  {
    propName: 'positionType',
    label: 'positionType'
  },
  {
    propName: 'startDate',
    label: 'startDate'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const passengerConnectionResultsColumn = [
  {
    propName: 'version',
    label: 'version'
  }
];

export const positionResultsColumn = [
  {
    propName: 'positionID',
    label: 'positionID'
  },
  {
    propName: 'code',
    label: 'code'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'name',
    label: 'name'
  },
  {
    propName: 'rank',
    label: 'rank'
  },
  {
    propName: 'type',
    label: 'type'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const qualificationResultsColumn = [
  {
    propName: 'qualificationID',
    label: 'qualificationID'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'name',
    label: 'name'
  },
  {
    propName: 'problemLevel',
    label: 'problemLevel'
  },
  {
    propName: 'problemType',
    label: 'problemType'
  },
  {
    propName: 'semantics',
    label: 'semantics'
  },
  {
    propName: 'verifyIsInEffectAt',
    label: 'verifyIsInEffectAt'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const subfleetResultsColumn = [
  {
    propName: 'subfleetID',
    label: 'subfleetID'
  },
  {
    propName: 'airspeed',
    label: 'airspeed'
  },
  {
    propName: 'bodyType',
    label: 'bodyType'
  },
  {
    propName: 'code',
    label: 'code'
  },
  {
    propName: 'domesticToInternationalTurnTime',
    label: 'domesticToInternationalTurnTime'
  },
  {
    propName: 'domesticTurnTime',
    label: 'domesticTurnTime'
  },
  {
    propName: 'fleetID',
    label: 'fleetID'
  },
  {
    propName: 'iataTypeDefault',
    label: 'iataTypeDefault'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'InternationalToDomesticTurnTime',
    label: 'InternationalToDomesticTurnTime'
  },
  {
    propName: 'internationalTurnTime',
    label: 'internationalTurnTime'
  },
  {
    propName: 'range',
    label: 'range'
  },
  {
    propName: 'restFacility',
    label: 'restFacility'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const trainingResultsColumn = [
  {
    propName: 'trainingID',
    label: 'trainingID'
  },
  {
    propName: 'identifier',
    label: 'identifier'
  },
  {
    propName: 'isAssignable',
    label: 'isAssignable'
  },
  {
    propName: 'isFlightSpecific',
    label: 'isFlightSpecific'
  },
  {
    propName: 'isTraineePartOfComplement',
    label: 'isTraineePartOfComplement'
  },
  {
    propName: 'isTrainerPartOfComplement',
    label: 'isTrainerPartOfComplement'
  },
  {
    propName: 'name',
    label: 'name'
  },
  {
    propName: 'version',
    label: 'version'
  }
];

export const worldSummaryProperties = {
  atcControlledStation: 'ATCControlledStation',
  aircraft: 'Aircraft',
  airport: 'Airport',
  airportGroup: 'AirportGroup',
  airportGroupRelationship: 'AirportGroupRelationship',
  crew: 'Crew',
  crewBase: 'CrewBase',
  fleet: 'Fleet',
  fleetCompatibility: 'FleetCompatibility',
  flight: 'Flight',
  flightActivity: 'FlightActivity',
  interSegmentTime: 'InterSegmentTime',
  maintenance: 'Maintenance',
  market: 'Market',
  nonFly: 'NonFly',
  offlineTransportation: 'OfflineTransportation',
  pairing: 'Pairing',
  passsengerConnection: 'PassengerConnection',
  position: 'Position',
  qualification: 'Qualification',
  sublfeet: 'Subfleet',
  training: 'Training'
};



