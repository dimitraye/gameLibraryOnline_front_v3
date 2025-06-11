import { UnauthGuard } from './unauth-guard';

describe('UnauthGuard', () => {
  it('should create an instance', () => {
    expect(new UnauthGuard()).toBeTruthy();
  });
});
