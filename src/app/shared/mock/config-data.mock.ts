export const dataServerConfigProperties = {
  baseDateTime: '2018-07-24 18:15',
  daysBackward: 7,
  daysForward: 3,
  property: 'FileSourcePath',
  propertyValue: 'C:/GE-ADS/SASI-test/data',
  timeMode: 'static'
};

export const dataServerAgents = [
  {
    agentName: 'XML File Agent',
    canInitiateDataLoad: false,
    context: 'Nov 10 to 16',
    dataLoadSequence: 0,
    hasDataLoad: true,
    lastRequest: '2018-11-14 11:10Z',
    status: 'LOADING'
  },
  {
    agentName: 'Flight Agent',
    canInitiateDataLoad: false,
    context: 'Oct 24 to 26',
    dataLoadSequence: 0,
    hasDataLoad: true,
    lastRequest: '2018-11-10 11:10Z',
    status: 'EVENTING'
  },
  {
    agentName: 'Custom Agent',
    canInitiateDataLoad: false,
    context: 'Oct 1 to 5',
    dataLoadSequence: 0,
    hasDataLoad: true,
    lastRequest: '2018-10-18 11:10Z',
    status: 'FAILED'
  },
  {
    agentName: 'Restart Agent',
    canInitiateDataLoad: false,
    context: 'Oct 24 to 26',
    dataLoadSequence: 0,
    hasDataLoad: true,
    lastRequest: '2017-11-18 11:10Z',
    status: 'STOPPED'
  }
];

export const fileAgent = {
  agentName: 'XML File Agent',
  eventSourceDirectory: 'C:/GE-ADS/SASI-test/data/input/events',
  isStarted: true,
  sasiHost: 'http://0.0.0.0:8080/sasi-server/data',
  worldRefFile: 'C:/GE-ADS/SASI-test/data/input/JB_Score_World_1.51_',
  agentStatus: {
    worldLoading: 'STOPPED',
    eventRecording: 'RUNNING',
    eventProcessing: 'IDLE'
  }
};

export const restartAgentPorperties = {
  restartAgentConfig: {
    sasiDataServerUrl: '/sasi-server/data',
    agentName: 'Restart Agent',
    restartOption: 'periodically',
    restartTime: '00:02'
  },
  restartAgentStatus: {
    currentServerTime: '2018-09-18 19:32',
    nextRestartTime: ''
  }
};
