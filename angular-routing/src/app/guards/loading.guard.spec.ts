import { TestBed, async, inject } from '@angular/core/testing';

import { LoadingGuard } from './loading.guard';

describe('LoadingGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingGuard]
    });
  });

  it('should ...', inject([LoadingGuard], (guard: LoadingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
