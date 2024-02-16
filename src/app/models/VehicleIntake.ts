import { ServiceType } from "./ServiceType";

export class VehicleIntake{
    id = 0;
    numberPlate = '';
    customerName = '';
    phone = '';
    storeId = 0;
    serviceTypesId = 0;
    serviceType = new ServiceType();
    vehicleType = '';
    status ='';
    discountCodeId = 0;
    createdBy = '';
    createdOn = new Date();
    modifiedOn = new Date();
    modifiedBy = '';
}