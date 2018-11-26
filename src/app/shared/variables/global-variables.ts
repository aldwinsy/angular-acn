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

export const worldGroup = {
  paradise: 'Paradise',
  purgatory: 'Purgatory',
  published: 'Published'
};

// @TODO: change to actual urls when endpoints are available
// Azure APIM still uses mock data

export const urls = {
  dataStatus: 'api/v1/data-status',
  worldObjects: 'api/v1/world-objects',
  worldService: 'https://sasi.azure-api.net/api/v1/world',
  dataAgents: 'https://sasi.azure-api.net/api/v1/config/tenant/zz/agents',
  purgatorySummary: 'https://sasi.azure-api.net/api/v1/world/tenant/zz/type/purgatory',
  paradiseSummary: 'https://sasi.azure-api.net/api/v1/world/tenant/zz/type/paradise',
  published0Summary: 'https://sasi.azure-api.net/api/v1/world/tenant/zz/type/published0',
  published1Summary: 'https://sasi.azure-api.net/api/v1/world/tenant/zz/type/published1',
  published2Summary: 'https://sasi.azure-api.net/api/v1/world/tenant/zz/type/published2'
};

export const worldSummaryColumns = [
  {
    propName: 'objectName',
    label: 'Property Name'
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
  dataStatus: 'Data Status',
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

export const fileAgentParametersLabels = {
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

export const dataServerAdminLabels = {
  sasiConfigTitle: 'SASI Configuration Properties',
  propertyDropdownPlaceholder: 'Source',
  propertyValuePlaceholder: 'Value',
  baseDateTime: 'Base Date/Time',
  baseDateTimePlaceholder: 'yyyy-MM-dd HH:mm',
  timeMode: 'Time Mode',
  timeModeDropdownPlaceHolder: 'Value',
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
  worldLoading: 'WorldLoading',
  eventRecording: 'Event Recording',
  eventProcessing: 'Event Processing',
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
    label: 'Fleet ID'
  },
  {
    propName: 'crewFleetName',
    label: 'Crew Fleet Name'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'opsFleetName',
    label: 'Ops Fleet Name'
  },
  {
    propName: 'version',
    label: 'Version'
  },
  {
    propName: 'withinFleetSwapCost',
    label: 'Within Fleet Swap Cost'
  }
];

export const atcControlledStationResultsColumn = [
  {
    propName: 'atcControlledStationID',
    label: 'ATC Controlled Station ID'
  },
  {
    propName: 'airportID',
    label: 'Airport ID'
  },
  {
    propName: 'stationCode',
    label: 'Station Code'
  },
  {
    propName: 'stationControlType',
    label: 'Station Control Type'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'isSubstitutionAllowed',
    label: 'Substitution Allowed'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const aircraftResultsColumn = [
  {
    propName: 'aircraftID',
    label: 'Aircraft ID'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'isCorrectiveActionRequired',
    label: 'Corrective Action Required'
  },
  {
    propName: 'subfleetID',
    label: 'Subfleet ID'
  },
  {
    propName: 'tail',
    label: 'Tail'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const airportResultsColumn = [
  {
    propName: 'airportID',
    label: 'Airport ID'
  },
  {
    propName: 'airportGroupID',
    label: 'Airport Group ID'
  },
  {
    propName: 'city',
    label: 'City',
  },
  {
    propName: 'code',
    label: 'Code'
  },
  {
    propName: 'country',
    label: 'Country'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'isAllowableSubfleets',
    label: 'Allowable Subfleets'
  },
  {
    propName: 'isCrewCustomsCheckRequired',
    label: 'Crew Customs Check Required'
  },
  {
    propName: 'isHub',
    label: 'Hub'
  },
  {
    propName: 'isInternational',
    label: 'International'
  },
  {
    propName: 'isServiced',
    label: 'Serviced'
  },
  {
    propName: 'name',
    label: 'name'
  },
  {
    propName: 'offsetGMT',
    label: 'Offset GMT'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const airportGroupResultsColumn = [
  {
    propName: 'airportGroupID',
    label: 'Airport Group ID'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const airportGroupRelationshipResultsColumn = [
  {
    propName: 'airportGroupRelationshipID',
    label: 'Airport Group Relationship ID'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'inflightTokens',
    label: 'Inflight Tokens'
  },
  {
    propName: 'operationalTokens',
    label: 'Operational Tokens'
  },
  {
    propName: 'pilotTokens',
    label: 'Pilot Tokens'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const crewResultsColumn = [
  {
    propName: 'crewID',
    label: 'Crew ID'
  },
  {
    propName: 'dateOfBirth',
    label: 'Date Of Birth'
  },
  {
    propName: 'employeeID',
    label: 'Employee ID'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'name',
    label: 'Name'
  },
  {
    propName: 'positionType',
    label: 'Position Type'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const crewBaseResultsColumn = [
  {
    propName: 'baseID',
    label: 'Base ID'
  },
  {
    propName: 'code',
    label: 'Code'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'name',
    label: 'Name'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const fleetCompatibilityResultsColumn = [
  {
    propName: 'fleetCompatibilityID',
    label: 'Fleet Compatibility ID'
  },
  {
    propName: 'fleetCompatibilityType',
    label: 'Fleet Compatibility Type'
  },
  {
    propName: 'fleetID',
    label: 'Fleet ID'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const flightResultsColumn = [
  {
    propName: 'flightID',
    label: 'Flight ID'
  },
  {
    propName: 'aircraftID',
    label: 'Aircraft ID'
  },
  {
    propName: 'arrDateTimeAct',
    label: 'Arr Date Time Act'
  },
  {
    propName: 'arrDateTimeEst',
    label: 'Arr Date Time Est'
  },
  {
    propName: 'arrDateTimeSch',
    label: 'Arr Date Time Sch'
  },
  {
    propName: 'arrDate',
    label: 'Arr Date'
  },
  {
    propName: 'canDeadHead',
    label: 'Dead Head'
  },
  {
    propName: 'arrierCode',
    label: 'Carrier Code'
  },
  {
    propName: 'destAirportID',
    label: 'Dest Airport ID'
  },
  {
    propName: 'dptDateTimeAct',
    label: 'Dpt Date Time Act'
  },
  {
    propName: 'ptDateTimeEst',
    label: 'Dpt Date Time Est'
  },
  {
    propName: 'dptDateTimeSch',
    label: 'Dpt Date Time Sch'
  },
  {
    propName: 'dptGate',
    label: 'Dpt Gate'
  },
  {
    propName: 'flightClass',
    label: 'Flight Class'
  },
  {
    propName: 'flightNumber',
    label: 'Flight Number'
  },
  {
    propName: 'flightState',
    label: 'Flight State'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'inControl',
    label: 'Control'
  },
  {
    propName: 'isCanceled',
    label: 'Canceled'
  },
  {
    propName: 'multiDepartureCode',
    label: 'Multi Departure Code'
  },
  {
    propName: 'offDateTime',
    label: 'Off Date Time'
  },
  {
    propName: 'onDateTime',
    label: 'On Date Time'
  },
  {
    propName: 'operationDate',
    label: 'Operation Date'
  },
  {
    propName: 'origAirportID',
    label: 'Orig Airport ID'
  },
  {
    propName: 'serviceType',
    label: 'Service Type'
  },
  {
    propName: 'subfleetID',
    label: 'Subfleet ID'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const flightActivityResultsColumn = [
  {
    propName: 'flightActivityID',
    label: 'Flight Activity ID'
  },
  {
    propName: 'category',
    label: 'Category'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'type',
    label: 'Type'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const interSegmentTimeResultsColumn = [
  {
    propName: 'version',
    label: 'Version'
  }
];

export const maintenanceResultsColumn = [
  {
    propName: 'maintenanceID',
    label: 'Maintenance ID'
  },
  {
    propName: 'priority',
    label: 'Priority'
  },
  {
    propName: 'airportID',
    label: 'Airport ID'
  },
  {
    propName: 'aircraftID',
    label: 'Aircraft ID'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'startDateTime',
    label: 'Start Date Time'
  },
  {
    propName: 'endDateTime',
    label: 'End Date Time'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const marketResultsColumn = [
  {
    propName: 'marketID',
    label: 'Market ID'
  },
  {
    propName: 'origAirportID',
    label: 'Orig Airport ID'
  },
  {
    propName: 'destAirportID',
    label: 'Dest Airport ID'
  },
  {
    propName: 'distance',
    label: 'Distance'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const nonFlyResultsColumn = [
  {
    propName: 'nonflyID',
    label: 'Nonfly ID'
  },
  {
    propName: 'changeability',
    label: 'Changeability'
  },
  {
    propName: 'code',
    label: 'Code'
  },
  {
    propName: 'destAirportID',
    label: 'Dest Airport ID'
  },
  {
    propName: 'endDateTime',
    label: 'End Date Time'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'isDutyTime',
    label: 'DutyTime'
  },
  {
    propName: 'label',
    label: 'Label'
  },
  {
    propName: 'origAirportID',
    label: 'Orig Airport ID'
  },
  {
    propName: 'startDateTime',
    label: 'Start Date Time'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const offlineTransportationResultsColumn = [
  {
    propName: 'offlineTransportationID',
    label: 'Offline Transportation ID'
  },
  {
    propName: 'cost',
    label: 'Cost'
  },
  {
    propName: 'destAirportID',
    label: 'Dest Airport ID'
  },
  {
    propName: 'durationInMinutes',
    label: 'Duration In Minutes'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'isCanceled',
    label: 'Canceled'
  },
  {
    propName: 'isPenalized',
    label: 'Penalized'
  },
  {
    propName: 'isSchedulingResource',
    label: 'Scheduling Resource'
  },
  {
    propName: 'name',
    label: 'Name'
  },
  {
    propName: 'offlineTransportationType',
    label: 'Offline Transportation Type'
  },
  {
    propName: 'origAirportID',
    label: 'Orig Airport ID'
  },
  {
    propName: 'positionType',
    label: 'Position Type'
  },
  {
    propName: 'startDateTime',
    label: 'Start Date Time'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const pairingResultsColumn = [
  {
    propName: 'pairingID',
    label: 'Pairing ID'
  },
  {
    propName: 'baseID',
    label: 'Base ID'
  },
  {
    propName: 'destAirportID',
    label: 'Dest Airport ID'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'name',
    label: 'Name'
  },
  {
    propName: 'origAirportID',
    label: 'Orig Airport ID'
  },
  {
    propName: 'positionType',
    label: 'Position Type'
  },
  {
    propName: 'startDate',
    label: 'Start Date'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const passengerConnectionResultsColumn = [
  {
    propName: 'passengerConnectionID',
    label: 'Passenger Connection ID'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'connectToFlightID',
    label: 'Connect To Flight ID'
  },
  {
    propName: 'connectFromFlightID',
    label: 'Connect From Flight ID'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const positionResultsColumn = [
  {
    propName: 'positionID',
    label: 'Position ID'
  },
  {
    propName: 'code',
    label: 'Code'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'name',
    label: 'Name'
  },
  {
    propName: 'rank',
    label: 'Rank'
  },
  {
    propName: 'type',
    label: 'Type'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const qualificationResultsColumn = [
  {
    propName: 'qualificationID',
    label: 'Qualification ID'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'name',
    label: 'Name'
  },
  {
    propName: 'problemLevel',
    label: 'Problem Level'
  },
  {
    propName: 'problemType',
    label: 'Problem Type'
  },
  {
    propName: 'semantics',
    label: 'Semantics'
  },
  {
    propName: 'verifyIsInEffectAt',
    label: 'Verify Is In Effect At'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const subfleetResultsColumn = [
  {
    propName: 'subfleetID',
    label: 'Subfleet ID'
  },
  {
    propName: 'airspeed',
    label: 'Airspeed'
  },
  {
    propName: 'bodyType',
    label: 'Body Type'
  },
  {
    propName: 'code',
    label: 'Code'
  },
  {
    propName: 'domesticToInternationalTurnTime',
    label: 'Domestic To International Turn Time'
  },
  {
    propName: 'domesticTurnTime',
    label: 'Domestic Turn Time'
  },
  {
    propName: 'fleetID',
    label: 'Fleet ID'
  },
  {
    propName: 'iataTypeDefault',
    label: 'IATA Type Default'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'internationalToDomesticTurnTime',
    label: 'International To Domestic Turn Time'
  },
  {
    propName: 'internationalTurnTime',
    label: 'International Turn Time'
  },
  {
    propName: 'range',
    label: 'Range'
  },
  {
    propName: 'restFacility',
    label: 'Rest Facility'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const trainingResultsColumn = [
  {
    propName: 'trainingID',
    label: 'Training ID'
  },
  {
    propName: 'identifier',
    label: 'Identifier'
  },
  {
    propName: 'isAssignable',
    label: 'Assignable'
  },
  {
    propName: 'isFlightSpecific',
    label: 'Flight Specific'
  },
  {
    propName: 'isTraineePartOfComplement',
    label: 'Trainee Part of Complement'
  },
  {
    propName: 'isTrainerPartOfComplement',
    label: 'Trainer Part of Complement'
  },
  {
    propName: 'name',
    label: 'Name'
  },
  {
    propName: 'version',
    label: 'Version'
  }
];

export const worldSummaryProperties = {
  atcControlledStation: 'atcControlledStation',
  aircraft: 'aircraft',
  airport: 'airport',
  airportGroup: 'airportGroup',
  airportGroupRelationship: 'airportGroupRelationship',
  crew: 'crew',
  crewBase: 'crewBase',
  fleet: 'fleet',
  fleetCompatibility: 'fleetCompatibility',
  flight: 'flight',
  flightActivity: 'flightActivity',
  interSegmentTime: 'interSegmentTime',
  maintenance: 'maintenance',
  market: 'market',
  nonFly: 'monfly',
  offlineTransportation: 'offlineTransportation',
  pairing: 'pairing',
  passsengerConnection: 'passengerConnection',
  position: 'position',
  qualification: 'qualification',
  sublfeet: 'subfleet',
  training: 'training'
};

export const worldObjectProperties = {
  atcControlledStation: [
    'atcControlledStationID',
    'airportID',
    'stationCode',
    'stationControlType',
    'identifier',
    'isSubstitutionAllowed',
    'version'
  ],
  aircraft: [
    'aircraftID',
    'identifier',
    'isCorrectiveActionRequired',
    'subfleetID',
    'tail',
    'version'
  ],
  airport: [
    'airportID',
    'airportGroupID',
    'city',
    'code',
    'country',
    'identifier',
    'isAllowableSubfleets',
    'isCrewCustomCheckRequired',
    'isHub',
    'isInternational',
    'isServiced',
    'name',
    'offsetGMT',
    'version'
  ],
  airportGroup: [
    'airportGroupID',
    'identifier',
    'vaersion'
  ],
  airportGroupRelationship: [
    'airportGroupRelationshipID',
    'identifier',
    'inflightTokens',
    'operationalTokens',
    'pilotTokens',
    'version'
  ],
  crew: [
    'crewID',
    'dateOfBirth',
    'employeeID',
    'identifier',
    'name',
    'positionType',
    'version'
  ],
  crewBase: [
    'baseID',
    'code',
    'identifier',
    'name',
    'version'
  ],
  fleet: [
    'fleetID',
    'crewFleetName',
    'identifier',
    'opsFleetName',
    'version',
    'withinFleetSwapCost'
  ],
  fleetCompatibility: [
    'fleetCompatibilityID',
    'fleetCompatibilityType',
    'fleetID',
    'identifier',
    'version'
  ],
  flight: [
    'flightID',
    'aircraftID',
    'arrDateTimeAct',
    'arrDatetieSch',
    'arrDate',
    'canDeadHead',
    'carriedCode',
    'destAirportID',
    'dptDateTimeAct',
    'dptDateTimeEst',
    'dptDateTimeSch',
    'dptGate',
    'flightClass',
    'flightNumber',
    'flightState',
    'identifier',
    'inControl',
    'isCanceled',
    'multiDepartureCode',
    'offDateTime',
    'onDateTime',
    'operationDate',
    'origAirportID',
    'serviceType',
    'subfleetID',
    'version'
  ],
  flightActivity: [
    'flightActivityID',
    'category',
    'identifier',
    'type',
    'version'
  ],
  interSegmentTime: [
    'interSegmentTimeID',
    'identifier',
    'version'
  ],
  maintenance: [
    'maintenanceID',
    'prioroty',
    'airportID',
    'aircraftID',
    'identifier',
    'startDateTime',
    'endDateTime',
    'version'
  ],
  market: [
    'marketID',
    'origAirportID',
    'destAirportID',
    'distance',
    'identifier',
    'version'
  ],
  nonfly: [
    'nonflyID',
    'changeability',
    'code',
    'destAirportID',
    'endDateTime',
    'identifier',
    'isDutyTime',
    'label',
    'origAirportID',
    'startDateTime',
    'version'
  ],
  offlineTransportation: [
    'offlineTransportationID',
    'cost',
    'destAirportID',
    'durationInMinutes',
    'identifier',
    'isCanceled',
    'isPenalized',
    'isSchedulingResource',
    'name',
    'offlineTransportationType',
    'origAirportID',
    'positiontype',
    'startDateTime',
    'version'
  ],
  pairing: [
    'pairingID',
    'baseID',
    'destAirportID',
    'identifier',
    'name',
    'origAirportID',
    'positionType',
    'startDate',
    'startDate',
    'version'
  ],
  passengerConnection: [
    'passengerConnectionID',
    'identifier',
    'version'
  ],
  position: [
    'positionID',
    'code',
    'identifier',
    'name',
    'rank',
    'type',
    'version'
  ],
  qualification: [
    'qualificationID',
    'identifier',
    'name',
    'problemLevel',
    'problemType',
    'semantics',
    'verifiyIsInEffectAt',
    'version'
  ],
  subfleet: [
    'subfleetID',
    'airspeed',
    'bodyType',
    'code',
    'domesticeToInternationalturnTime',
    'domesticTurnTime',
    'fleetID',
    'iataTypeDefault',
    'identifier',
    'internationToDomesticturnTime',
    'internationalturntime',
    'range',
    'restFacility',
    'version'
  ],
  training: [
    'trainingID',
    'identifier',
    'isAssignable',
    'isFlightSpecific',
    'isTraineePartOfComplement',
    'isTrainerPartOfComplement',
    'name',
    'version',
  ]
};

export const dataAgentColumnObjects = [
  {
    propName: 'select',
    label: ''
  },
  {
    propName: 'agentName',
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
    propName: 'lastRequest',
    label: 'Last Access'
  },
  {
    propName: 'hasDataLoad',
    label: 'Required For Data Load'
  },
  {
    propName: 'canInitiateDataLoad',
    label: 'Can Initiate Restart'
  },
  {
    propName: 'dataLoadSequence',
    label: 'Data Load Sequence'
  }
];
