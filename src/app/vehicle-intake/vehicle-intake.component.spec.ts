import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleIntakeComponent } from './vehicle-intake.component';

describe('VehicleIntakeComponent', () => {
  let component: VehicleIntakeComponent;
  let fixture: ComponentFixture<VehicleIntakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleIntakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
