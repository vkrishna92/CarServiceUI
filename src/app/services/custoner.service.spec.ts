import { TestBed } from '@angular/core/testing';

import { CustonerService } from './custoner.service';

describe('CustonerService', () => {
  let service: CustonerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustonerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
