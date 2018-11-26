export interface WorldSummaryInterface {
  objectName: string;
  purgatoryCount: number;
  paradiseCount: number;
}

export interface TopLevelObject {
  objectName: string;
  objectCount: number;
}

export interface Total {
  events: number;
  count: number;
}

export interface SasiWorldInterface {
  objectType: string;
  baseTime: string;
  lastDataUpdateTime: string;
  latestFlightActualTime: string;
  delta: number;
  topLevelObjects: TopLevelObject[];
  total: Total;
}

// status page

export interface SasiWorldSummary {
  paradiseEvents: string;
  paradiseObj: number;
  propertyName: string;
  purgatoryEvents: string;
  purgatoryObj: number;
  validationExcl: string;
  validationFixed: string;
  validationIEPM: string;
  validationOEPM: string;
}
export interface SasiStatusTimeInterface {
  propertyName: string;
  purgatoryTime: string;
  paradiseTime: string;
  qSize: string;
}
