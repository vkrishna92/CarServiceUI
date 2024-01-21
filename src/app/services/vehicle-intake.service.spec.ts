import { TestBed } from '@angular/core/testing';

import { VehicleIntakeService } from './vehicle-intake.service';

describe('VehicleIntakeService', () => {
  let service: VehicleIntakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleIntakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
