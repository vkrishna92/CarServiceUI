import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatStepper, MatStepperModule} from '@angular/material/stepper';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule, NzSelectSizeType } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'app-send-sms',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatStepperModule,

    NzBreadCrumbModule,
    NzInputModule,
    NzDropDownModule,
    NzSelectModule,
    NzFormModule,
    NzButtonModule,
    NzResultModule,

    FormsModule
  ],
  templateUrl: './send-sms.component.html',
  styleUrl: './send-sms.component.css'
})
export class SendSMSComponent implements OnInit{

  listOfOption: Array<{ label: string; value: string }> = [];
  size: NzSelectSizeType = 'default';
  singleValue = 'a10';
  multipleValue = ['a10', 'c12'];
  tagValue = ['a10', 'c12', 'tag'];
  
  inputValue: string = '';
  @ViewChild('stepper') stepper: MatStepper;
  ngOnInit(): void {
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }

  
  constructor() {
    
  }
  clickNext(){
    this.stepper.next();
  }
  clickBack(){
    this.stepper.previous();
  }


}
