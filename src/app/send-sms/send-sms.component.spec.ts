import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSMSComponent } from './send-sms.component';

describe('SendSMSComponent', () => {
  let component: SendSMSComponent;
  let fixture: ComponentFixture<SendSMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendSMSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendSMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
