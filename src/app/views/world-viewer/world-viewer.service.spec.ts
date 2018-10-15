import { TestBed } from '@angular/core/testing';

import { WorldViewerService } from './world-viewer.service';

describe('WorldViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorldViewerService = TestBed.get(WorldViewerService);
    expect(service).toBeTruthy();
  });
});
