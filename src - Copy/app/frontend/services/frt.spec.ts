import { TestBed } from '@angular/core/testing';

import { Frt } from './frt';

describe('Frt', () => {
  let service: Frt;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Frt);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
