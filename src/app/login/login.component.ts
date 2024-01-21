import { Component } from '@angular/core';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AuthService } from '../services/auth.service';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NzSpinModule, NzSelectModule, NzInputModule, NzButtonModule, NzFormModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoading = false;
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  });
  constructor(private authService: AuthService, private router: Router) {
  }

  login(){
    this.isLoading = true;
    let model = this.loginForm.getRawValue()
    this.authService.login(model).subscribe( (x:any) =>{
      this.isLoading = false;
      localStorage.setItem('token', x.token);
      localStorage.setItem('storeId',x.storeId);
      this.router.navigate(['/vehicle-queue']);
    })
  }
}
