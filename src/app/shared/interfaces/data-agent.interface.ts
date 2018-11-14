export interface DataAgentInterface {

    agentName: string;
    context: string;
    status: string;
    lastRequest: string;
    hasDataLoad: boolean;
    canInitiateDataLoad: boolean;
    dataLoadSequence: number;

}
