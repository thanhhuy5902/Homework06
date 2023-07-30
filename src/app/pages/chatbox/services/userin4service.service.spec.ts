import { TestBed } from '@angular/core/testing';

import { Userin4Service } from './userservice.service';

describe('Userin4Service', () => {
  let service: Userin4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Userin4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
