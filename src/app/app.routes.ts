import { Routes } from '@angular/router';
import { VehicleIntakeComponent } from './vehicle-intake/vehicle-intake.component';
import { VehicleQueueComponent } from './vehicle-queue/vehicle-queue.component';
import { UpdateVehicleStatusComponent } from './update-vehicle-status/update-vehicle-status.component';
import { LoginComponent } from './login/login.component';
import { ServiceTypeComponent } from './service-type/service-type.component';
import { ServiceTypeListComponent } from './service-type-list/service-type-list.component';

export const routes: Routes = [
    {path:'vehicle-intake/:id', component: VehicleIntakeComponent}, 
    {path: 'service-type', component: ServiceTypeListComponent},
    {path:'service-type/:id', component: ServiceTypeComponent},   
    {path:'vehicle-queue', component: VehicleQueueComponent},
    {path:'login', component: LoginComponent},
    {path:'update-vehicle-status/:id', component:UpdateVehicleStatusComponent}
];
