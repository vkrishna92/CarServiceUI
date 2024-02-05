import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

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

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, FormsModule, CommonModule, NzAlertModule, NzDescriptionsModule, NzSpinModule, NzFormModule,NzSwitchModule, NzInputNumberModule, NzAlertModule, NzSpinModule, NzSelectModule, NzInputModule, NzButtonModule, NzFormModule ],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent implements OnInit {
  
  userProfile: any;
  isLoading = false;
  alertMsg : AlertMessage= {message:'', type:'info'};
  userProfileForm = new FormGroup({
    userName : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required]),
    displayName : new FormControl('',[Validators.required]),
    phoneNumber : new FormControl('',[Validators.required])    
  });

  constructor(private authService: AuthService) {    
    
  }
  
  ngOnInit(): void {    
    this.getProfile();
  }

  getProfile(){
    this.isLoading = true;
    this.authService.getCurrentUserProfile().subscribe(x =>{
      console.log(x);
      this.userProfile = x;
      this._setForm(x);
      this.isLoading = false;

    },err =>{
      console.log(err);
      this.isLoading = false;
    })
  }

  clickSave(){
    this.isLoading = true;
    this.authService.updateCurrentUserProfile(this.userProfileForm.value).subscribe(x =>{
      console.log(x);
      this.alertMsg.message = 'Profile updated successfully';
      this.alertMsg.type = 'success';      
      this.isLoading = false;

    },err =>{
      console.log(err);
      this.alertMsg.message = 'Error updating profile';
      this.alertMsg.type = 'error';
      this.isLoading = false;
    })
  }
  private _setForm(val : any){
    this.userProfileForm.patchValue({
      userName : val.userName,
      email : val.email,
      displayName : val.displayName,
      phoneNumber : val.phoneNumber
    })
  }

  
}
