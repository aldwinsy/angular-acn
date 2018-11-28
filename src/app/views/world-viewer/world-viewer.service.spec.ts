import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WorldViewerService } from './world-viewer.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { fleetMock } from 'sasi/shared/mock/world-objects-mock';
import { urls, tenant } from 'sasi/shared/variables/global-variables';

describe('WorldViewerService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let worldViewerService: WorldViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WorldViewerService, HttpClient]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    worldViewerService = TestBed.get(WorldViewerService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(worldViewerService).toBeTruthy();
  });

  it('should get world objects', () => {
    const world = 'Purgatory';
    const object = 'fleet';
    worldViewerService.getWorldObjects(world, object).subscribe(response => {
      expect(response).toEqual(fleetMock);
    });
    // @TODO: Update url when when config endpoint is available
    const req = httpTestingController.expectOne(`${urls.worldService}/tenant/${tenant}/type/${world}/${object}`);
    expect(req.request.method).toEqual('GET');
    req.flush(fleetMock);
  });
});
