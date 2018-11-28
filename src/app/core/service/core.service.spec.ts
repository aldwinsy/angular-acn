import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { CoreService } from './core.service';
import { urls, tenant } from 'sasi/shared/variables/global-variables';
import { PurgatorySummaryMock } from 'sasi/shared/mock/purgatory-summary.mock';
import { ParadiseSummaryMock } from 'sasi/shared/mock/paradise-summary.mock';
import { PublishedSummaryMock } from 'sasi/shared/mock/published-summary.mock';
import { worldEventsMock } from 'sasi/shared/mock/world-events.mock';
import { worldValidation } from 'sasi/shared/mock/world-validation.mock';

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
    expect(coreService).toBeTruthy();
  });

  it('should get purgatory summary', () => {
    coreService.getPurgatorySummary().subscribe(response => {
      expect(response).toEqual(PurgatorySummaryMock);
    });
    const req = httpTestingController.expectOne(urls.purgatorySummary);
    expect(req.request.method).toEqual('GET');
    req.flush(PurgatorySummaryMock);
  });

  it('should get paradise summary', () => {
    coreService.getParadiseSummary().subscribe(response => {
      expect(response).toEqual(ParadiseSummaryMock);
    });
    const req = httpTestingController.expectOne(urls.paradiseSummary);
    expect(req.request.method).toEqual('GET');
    req.flush(ParadiseSummaryMock);
  });

  it('should get published summary', () => {
    coreService.getPublishedWorld(urls.published0Summary).subscribe(response => {
      expect(response).toEqual(PublishedSummaryMock);
    });
    const req = httpTestingController.expectOne(urls.published0Summary);
    expect(req.request.method).toEqual('GET');
    req.flush(PublishedSummaryMock);
  });

  it('should get world events', () => {
    const type = 'purgatory';
    coreService.getWorldEvents(type).subscribe(response => {
      expect(response).toEqual(worldEventsMock);
    });
    const req = httpTestingController.expectOne(`${urls.sasiBaseUrl}/sasi/tenant/${tenant}/type/${type}/events`);
    expect(req.request.method).toEqual('GET');
    req.flush(worldEventsMock);
  });

  it('should get world validation', () => {
    coreService.getWorldValidation().subscribe(response => {
      expect(response).toEqual(worldValidation);
    });
    const req = httpTestingController.expectOne(`${urls.sasiBaseUrl}/sasi/tenant/${tenant}/validation`);
    expect(req.request.method).toEqual('GET');
    req.flush(worldValidation);
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
