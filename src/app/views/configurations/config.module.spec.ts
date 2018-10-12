import { ConfigModule } from 'sasi/views/configurations/config.module';

describe('SasiConfigModule', () => {
  let sasiConfigModule: ConfigModule;

  beforeEach(() => {
    sasiConfigModule = new ConfigModule();
  });

  it('should create an instance', () => {
    expect(sasiConfigModule).toBeTruthy();
  });
});
