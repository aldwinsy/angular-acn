/* This file contains all constant variables which is reusable accross all pages */

export const appTitle: String = 'SASI 2.0';

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
