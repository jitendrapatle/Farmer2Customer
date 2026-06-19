import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authSuperAdminGuard } from './auth-super-admin-guard';

describe('authSuperAdminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authSuperAdminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
