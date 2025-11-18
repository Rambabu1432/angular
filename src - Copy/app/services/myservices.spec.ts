import { TestBed } from '@angular/core/testing';

import { Myservices } from './myservices';

describe('Myservices', () => {
  let service: Myservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Myservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
