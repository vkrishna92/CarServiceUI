import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzListModule } from 'ng-zorro-antd/list';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet, NzListModule, NzPageHeaderModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'CarServiceUI';
  userLogin = false;
  constructor(private router: Router, private auth: AuthService) {

  }
  ngOnInit(): void {
    this.userLogin = this.auth.isLoggedIn;
  }

  logout(sideNav: MatSidenav){
    localStorage.removeItem('storeId');
    localStorage.removeItem('token');
    sideNav.toggle();
    this.userLogin = false;
    this.auth.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
