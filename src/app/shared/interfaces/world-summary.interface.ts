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
  published_0_Events: string;
  published_0_Obj: number;
  published_1_Events: string;
  published_1_Obj: number;
  published_2_Events: string;
  published_2_Obj: number;
  purgatoryEvents: string;
  purgatoryObj: number;
  validationExcl: string;
  validationFixed: string;
  validationIEPM: string;
  validationOEPM: string;

}
