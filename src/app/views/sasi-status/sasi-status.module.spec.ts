import { SasiStatusModule } from './sasi-status.module';

describe('SasiStatusModule', () => {
  let sasiStatusModule: SasiStatusModule;

  beforeEach(() => {
    sasiStatusModule = new SasiStatusModule();
  });

  it('should create an instance', () => {
    expect(sasiStatusModule).toBeTruthy();
  });
});
