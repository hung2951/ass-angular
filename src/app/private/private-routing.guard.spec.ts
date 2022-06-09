import { TestBed } from '@angular/core/testing';

import { PrivateRoutingGuard } from './private-routing.guard';

describe('PrivateRoutingGuard', () => {
  let guard: PrivateRoutingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PrivateRoutingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
