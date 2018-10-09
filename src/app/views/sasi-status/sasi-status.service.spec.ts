import { TestBed } from '@angular/core/testing';

import { SasiStatusService } from './sasi-status.service';

describe('SasiStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SasiStatusService = TestBed.get(SasiStatusService);
    expect(service).toBeTruthy();
  });
});
