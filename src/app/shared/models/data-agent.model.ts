export class DataAgent {

  name = '';
  context = '';
  status = '';
  lastRequest = '';
  lastEventRecorded = '';
  lastEventProcessed = '';
  delta = '';
  type = '';

  constructor (item: any) {
    this.name = item.name;
    this.context = item.context;
    this.status = item.status;
    this.lastRequest = item.lastRequest;
    this.lastEventRecorded = item.lastEventRecorded;
    this.lastEventProcessed = item.lastEventProcessed;
    this.delta = item.delta;
    this.type = item.type;
  }

  /* getMomentDuration (date: String) {
    // insert logic to return moment duration
  } */

}
