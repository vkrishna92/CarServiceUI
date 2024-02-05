import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDiscountCodeComponent } from './add-edit-discount-code.component';

describe('AddEditDiscountCodeComponent', () => {
  let component: AddEditDiscountCodeComponent;
  let fixture: ComponentFixture<AddEditDiscountCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditDiscountCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditDiscountCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
