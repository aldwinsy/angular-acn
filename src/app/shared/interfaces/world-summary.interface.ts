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
