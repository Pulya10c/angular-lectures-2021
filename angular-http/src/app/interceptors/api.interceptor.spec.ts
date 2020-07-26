import { TestBed } from '@angular/core/testing';

import { ApiInterceptor } from './api.interceptor';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiInterceptor = TestBed.get(ApiInterceptor);
    expect(service).toBeTruthy();
  });
});
