import { AccompanierModule } from './accompanier.module';

describe('AccompanierModule', () => {
  let accompanierModule: AccompanierModule;

  beforeEach(() => {
    accompanierModule = new AccompanierModule();
  });

  it('should create an instance', () => {
    expect(accompanierModule).toBeTruthy();
  });
});
