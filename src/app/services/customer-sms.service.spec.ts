import { TestBed } from '@angular/core/testing';

import { CustomerSMSService } from './customer-sms.service';

describe('CustomerSMSService', () => {
  let service: CustomerSMSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerSMSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
