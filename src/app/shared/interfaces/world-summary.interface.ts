export interface WorldSummaryInterface {
  propertyName: string;
  purgatoryCount: number;
  paradiseCount: number;
}

export interface TopLevelObject {
  objectName: string;
  objectCount: number;
  fixed: number;
  iEmp: number;
  excl: number;
  oEpm: number;
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