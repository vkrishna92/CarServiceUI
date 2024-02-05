export class DiscountCode {
    id: number;
    code: string;
    isActive: boolean;
    percentage: number;
    createdBy: string;
    createdOn: Date;
    modifiedOn: Date;
    modifiedBy: string;

    constructor(
        id: number,
        code: string,
        isActive: boolean,
        percentage: number,
        createdBy: string,
        createdOn: Date,
        modifiedOn: Date,
        modifiedBy: string
    ) {
        this.id = id;
        this.code = code;
        this.isActive = isActive;
        this.percentage = percentage;
        this.createdBy = createdBy;
        this.createdOn = createdOn;
        this.modifiedOn = modifiedOn;
        this.modifiedBy = modifiedBy;
    }
}