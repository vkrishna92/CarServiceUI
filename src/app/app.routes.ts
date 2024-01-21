import { Routes } from '@angular/router';
import { VehicleIntakeComponent } from './vehicle-intake/vehicle-intake.component';
import { VehicleQueueComponent } from './vehicle-queue/vehicle-queue.component';
import { UpdateVehicleStatusComponent } from './update-vehicle-status/update-vehicle-status.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'vehicle-intake/:id', component: VehicleIntakeComponent},    
    {path:'vehicle-queue', component: VehicleQueueComponent},
    {path:'login', component: LoginComponent},
    {path:'update-vehicle-status/:id', component:UpdateVehicleStatusComponent}
];
