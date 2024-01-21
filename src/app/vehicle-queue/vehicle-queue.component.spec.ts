import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleQueueComponent } from './vehicle-queue.component';

describe('VehicleQueueComponent', () => {
  let component: VehicleQueueComponent;
  let fixture: ComponentFixture<VehicleQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleQueueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
