import { Routes } from '@angular/router';
import { VehicleIntakeComponent } from './vehicle-intake/vehicle-intake.component';
import { VehicleQueueComponent } from './vehicle-queue/vehicle-queue.component';
import { UpdateVehicleStatusComponent } from './update-vehicle-status/update-vehicle-status.component';
import { LoginComponent } from './login/login.component';
import { ServiceTypeComponent } from './service-type/service-type.component';
import { ServiceTypeListComponent } from './service-type-list/service-type-list.component';
import { VehicleServiceHistoryComponent } from './vehicle-service-history/vehicle-service-history.component';
import { ServiceInvoiceComponent } from './service-invoice/service-invoice.component';
import { DiscountCodeListComponent } from './discount-code-list/discount-code-list.component';
import { AddEditDiscountCodeComponent } from './add-edit-discount-code/add-edit-discount-code.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SmsMarketingComponent } from './sms-marketing/sms-marketing.component';
import { SendSMSComponent } from './send-sms/send-sms.component';

export const routes: Routes = [
    {path:'vehicle-intake/:id', component: VehicleIntakeComponent}, 
    {path: 'service-type', component: ServiceTypeListComponent},    
    {path:'service-type/:id', component: ServiceTypeComponent},   
    {path:'vehicle-queue', component: VehicleQueueComponent},
    {path:'service-invoice/:id', component: ServiceInvoiceComponent},
    {path:'vehicle-history-search', component: VehicleServiceHistoryComponent},
    {path:'sms-marketing', component: SmsMarketingComponent},
    {path: 'send-sms', component: SendSMSComponent},
    { path : 'discount-codes', component: DiscountCodeListComponent},
    { path : 'discount-code/:id', component: AddEditDiscountCodeComponent},
    {path:'customer', component: CustomerListComponent},
    {path:'login', component: LoginComponent},
    {path:'myprofile', component: MyProfileComponent},
    {path :'reset-password', component: ResetPasswordComponent},
    {path:'update-vehicle-status/:id', component:UpdateVehicleStatusComponent}
];
