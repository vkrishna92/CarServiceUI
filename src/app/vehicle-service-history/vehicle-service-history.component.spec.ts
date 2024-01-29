import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleServiceHistoryComponent } from './vehicle-service-history.component';

describe('VehicleServiceHistoryComponent', () => {
  let component: VehicleServiceHistoryComponent;
  let fixture: ComponentFixture<VehicleServiceHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleServiceHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleServiceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
