import { TestBed } from '@angular/core/testing';

import { InsuranceRestService } from './insurance-rest.service';

describe('InsuranceRestService', () => {
  let service: InsuranceRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
