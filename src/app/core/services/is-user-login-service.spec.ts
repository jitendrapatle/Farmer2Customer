import { TestBed } from '@angular/core/testing';

import { IsUserLoginService } from './is-user-login-service';

describe('IsUserLoginService', () => {
  let service: IsUserLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsUserLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
