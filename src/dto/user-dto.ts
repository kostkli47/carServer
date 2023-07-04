import { IUser } from "src/interfaces/user";
 
export class UserDto implements IUser {
    name: string;
    tel:string;
    driveExperience: string;
    passport: number;
    driveLicence:number
 }