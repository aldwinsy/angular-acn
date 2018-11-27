export interface ITopLevelObject {
  objectName: string;
  objectCount: number;
}

export interface ISasiWorld {
  objectType: string;
  baseTime: string;
  lastDataUpdateTime: string;
  latestFlightActualTime: string;
  delta: number;
  topLevelObjects: ITopLevelObject[];
  total: number;
}

// status page

export interface IValidationInfo {
  qSize: number;
  qMs: number;
  max0: number;
  max1: number;
  min0: number;
  min1: number;
}

export interface IValidationDetail {
  propertyName: string;
  validationIEPM: string;
  validationExcl: string;
  validationFixed: string;
  validationOEPM: string;
}

export interface IWorldValidation {
  validationInfo: IValidationInfo;
  validationDetails: IValidationDetail[];
}

export interface IWorldEvents {
  propertyName: string;
  eventCount: string;
}
