import { Component, OnInit } from '@angular/core';

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AlertMessage } from '../models/AlertMessage';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [NzFormModule, NzInputModule, NzButtonModule, FormsModule, ReactiveFormsModule, CommonModule, RouterModule, NzAlertModule, NzSpinModule, NzSelectModule, NzInputModule, NzInputNumberModule, NzSwitchModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit{

  isLoading = false;
  passwordForm = new FormGroup({
    oldPassword : new FormControl('',[Validators.required]),
    newPassword : new FormControl('',[Validators.required]),
    confirmPassword : new FormControl('',[Validators.required])
  });
  alertMsg: AlertMessage = {message:'', type:'info'};
  constructor(private authService: AuthService) {    
    
  }
  ngOnInit(): void {
    
  }

  resetPassword(){
    this.isLoading = true;
    let model = this.passwordForm.getRawValue();
    if(model.newPassword != model.confirmPassword){
      this.alertMsg.message = 'Password and confirm password does not match';
      this.alertMsg.type = 'error';
      this.isLoading = false;
      return;
    }
    this.authService.resetCurrUserPassword(model).subscribe(x =>{
      this.isLoading = false;
      this.alertMsg.message = 'Password reset successfully';
      this.alertMsg.type = 'success';
      this.passwordForm.reset();
    },err =>{
      this.alertMsg.message = 'Password reset failed';
      this.alertMsg.type = 'error';
      this.isLoading = false;
      console.log(err);
    })
  }
}
