import { IOrder } from "src/interfaces/order"

export class OrderDto implements IOrder{
    username: string;
    tel: string;
    driveExperience:string;
    passport: string;
    driveLicence:string;
    startRentDate: string;
    endRentDate: string;
    price:number;
    carBrand:string

    constructor (username, tel, driveExperience, passport, driveLicence, startRentDate, endRentDate, price, carBrand){
        this.username = username;
        this.tel = tel;
        this.driveExperience = driveExperience
        this.passport = passport;
        this.driveLicence = driveLicence;
        this.startRentDate = startRentDate;
        this.endRentDate = endRentDate;
        this.price = price;
        this.carBrand = carBrand;
    }
}