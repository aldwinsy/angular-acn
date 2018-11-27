export interface WorldSummary {
  objectName: string;
  purgatoryCount: number;
  paradiseCount: number;
}

export interface TopLevelObject {
  objectName: string;
  objectCount: number;
}

export interface Total {
  // events: number;
  count: number;
}

export interface SasiWorld {
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

export interface SasiStatusTime {
  propertyName: string;
  purgatoryTime: string;
  paradiseTime: string;
  qSize: string;
}

export interface ValidationInfo {
  qSize: number;
  qMs: number;
  max0: number;
  max1: number;
  min0: number;
  min1: number;
}

export interface ValidationDetail {
  propertyName: string;
  validationIEPM: string;
  validationExcl: string;
  validationFixed: string;
  validationOEPM: string;
}

export interface WorldValidation {
  validationInfo: ValidationInfo;
  validationDetails: ValidationDetail[];
}

export interface WorldEvents {
  propertyName: string;
  eventCount: string;
}
