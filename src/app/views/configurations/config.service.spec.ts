import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { dataServerConfigProperties, dataServerAgents, fileAgent, restartAgentPorperties } from 'sasi/shared/mock/config-data.mock';

describe('ConfigService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let configService: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigService, HttpClient]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    configService = TestBed.get(ConfigService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(configService).toBeTruthy();
  });

  it('should get data server config properties', () => {
    configService.getDataServerConfigProperties().subscribe(response => {
      expect(response).toEqual(dataServerConfigProperties);
    });
    // @TODO: Update url when when config endpoint is available
    const req = httpTestingController.expectOne('https://api.myjson.com/bins/6ikxu');
    expect(req.request.method).toEqual('GET');
    req.flush(dataServerConfigProperties);
  });

  it('should update data server config properties', () => {
    configService.updateDataServerConfigProperties(dataServerConfigProperties).subscribe(response => {
      expect(response).toEqual(dataServerConfigProperties);
    });
    // @TODO: Update url when when config endpoint is available
    const req = httpTestingController.expectOne('https://api.myjson.com/bins/6ikxu');
    expect(req.request.method).toEqual('PUT');
    req.flush(dataServerConfigProperties);
  });

  it('should get data server agents', () => {
    configService.getDataServerAgents().subscribe(response => {
      expect(response).toEqual(dataServerAgents);
    });
    // @TODO: Update url when when config endpoint is available
    const req = httpTestingController.expectOne('https://api.myjson.com/bins/a36ki');
    expect(req.request.method).toEqual('GET');
    req.flush(dataServerAgents);
  });

  it('should add data server agents', () => {
    configService.addDataServerAgents(dataServerAgents).subscribe(response => {
      expect(response).toEqual(dataServerAgents);
    });
    // @TODO: Update url when when config endpoint is available
    const req = httpTestingController.expectOne('https://api.myjson.com/bins/a36ki');
    expect(req.request.method).toEqual('POST');
    req.flush(dataServerAgents);
  });

  it('should update data server agent', () => {
    const agent = {
      agentName: 'XML File Agent',
      canInitiateDataLoad: false,
      context: 'Nov 10 to 16',
      dataLoadSequence: 0,
      hasDataLoad: true,
      lastRequest: '2018-11-14 11:10Z',
      status: 'LOADING'
    };
    configService.updateDataServerAgents(agent).subscribe(response => {
      expect(response).toEqual(agent);
    });
    // @TODO: Update url when when config endpoint is available
    const req = httpTestingController.expectOne('https://api.myjson.com/bins/a36ki');
    expect(req.request.method).toEqual('POST');
    req.flush(agent);
  });

  it('should delete data server agents', () => {
    configService.deleteDataServerAgents(dataServerAgents).subscribe(response => {
      expect(response).toEqual(dataServerAgents);
    });
    // @TODO: Update url when when config endpoint is available
    const req = httpTestingController.expectOne('https://api.myjson.com/bins/a36ki');
    expect(req.request.method).toEqual('DELETE');
    req.flush(dataServerAgents);
  });

  it('should get file agent properties', () => {
    configService.getFileAgent().subscribe(response => {
      expect(response).toEqual(fileAgent);
    });
    // @TODO: Update url when when config endpoint is available
    const req = httpTestingController.expectOne('https://api.myjson.com/bins/16yivm');
    expect(req.request.method).toEqual('GET');
    req.flush(fileAgent);
  });

  it('should restart file agent', () => {
    configService.restartFileAgent(fileAgent).subscribe(response => {
      expect(response).toEqual(fileAgent);
    });
    // @TODO: Update url when when config endpoint is available
    const req = httpTestingController.expectOne('https://api.myjson.com/bins/16yivm');
    expect(req.request.method).toEqual('PUT');
    req.flush(fileAgent);
  });

  it('should process file agent', () => {
    configService.processFileAgent(fileAgent).subscribe(response => {
      expect(response).toEqual(fileAgent);
    });
    // @TODO: Update url when when config endpoint is available
    const req = httpTestingController.expectOne('https://api.myjson.com/bins/16yivm');
    expect(req.request.method).toEqual('PUT');
    req.flush(fileAgent);
  });

  it('should get restart agent properties', () => {
    configService.getRestartAgent().subscribe(response => {
      expect(response).toEqual(restartAgentPorperties);
    });
    // @TODO: Update url when when config endpoint is available
    const req = httpTestingController.expectOne('https://api.myjson.com/bins/vpfjm');
    expect(req.request.method).toEqual('GET');
    req.flush(restartAgentPorperties);
  });

  it('should update restart agent properties', () => {
    configService.updateRestartAgent(restartAgentPorperties).subscribe(response => {
      expect(response).toEqual(restartAgentPorperties);
    });
    // @TODO: Update url when when config endpoint is available
    const req = httpTestingController.expectOne('https://api.myjson.com/bins/vpfjm');
    expect(req.request.method).toEqual('PUT');
    req.flush(restartAgentPorperties);
  });
});
