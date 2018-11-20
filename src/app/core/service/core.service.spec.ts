import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { CoreService } from './core.service';
import { urls } from 'sasi/shared/variables/global-variables';
import { PurgatorySummaryMock } from 'sasi/shared/mock/purgatory-summary.mock';
import { ParadiseSummaryMock } from 'sasi/shared/mock/paradise-summary.mock';

describe('CoreService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let coreService: CoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoreService, HttpClient]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    coreService = TestBed.get(CoreService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: CoreService = TestBed.get(CoreService);
    expect(service).toBeTruthy();
  });

  it('should get purgatory summary', () => {
    coreService.getPurgatorySummary().subscribe(response => {
      expect(response).toEqual(PurgatorySummaryMock);
    });
    const req = httpTestingController.expectOne(urls.purgatorySummary);
    expect(req.request.method).toEqual('GET');
    req.flush(PurgatorySummaryMock);
  });

  it('shoul get paradise summary', () => {
    coreService.getParadiseSummary().subscribe(response => {
      expect(response).toEqual(ParadiseSummaryMock);
    });
    const req = httpTestingController.expectOne(urls.paradiseSummary);
    expect(req.request.method).toEqual('GET');
    req.flush(ParadiseSummaryMock);
  });

  it('should handle error error if request fails', () => {
    spyOn<any>(coreService, 'handleError').and.callThrough();
    coreService.getPurgatorySummary().subscribe(() => {},
    (error) => {
      expect(error).toBe(`Error status code 0 at ${urls.purgatorySummary}`);
    });
    const request = httpTestingController.expectOne(urls.purgatorySummary);
    request.error(new ErrorEvent(''));
    expect(coreService['handleError']).toHaveBeenCalled();
  });
});
