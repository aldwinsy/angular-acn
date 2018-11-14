import { TestBed } from '@angular/core/testing';

import { SasiStatusService } from './sasi-status.service';
import { HttpClientModule } from '@angular/common/http';

describe('SasiStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
  });

  it('should be created', () => {
    const service: SasiStatusService = TestBed.get(SasiStatusService);
    expect(service).toBeTruthy();
  });
});
