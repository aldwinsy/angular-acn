export class DataAgent {

  agentName: string;
  context: string;
  status: string;
  lastRequest: string;
  hasDataLoad: boolean;
  canInitiateDataLoad: boolean;
  dataLoadSequence: number;
  type: string;

  constructor (item: any) {
    this.agentName = item.agentName;
    this.context = item.context;
    this.status = item.status;
    this.lastRequest = item.lastRequest;
    this.hasDataLoad = item.hasDataLoad;
    this.canInitiateDataLoad = item.canInitiateDataLoad;
    this.dataLoadSequence = item.dataLoadSequence;
    this.type = this.getType(item.agentName);
  }

  getType(agentName): string {
    if (agentName === 'XML File Agent' || agentName === 'Restart Agent') {
      return 'Built-in Agent';
    } else {
      return 'Custom Agent';
    }
  }

}
