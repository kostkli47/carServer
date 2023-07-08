import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  username: string;

  @Prop()
  tel: string;

  @Prop()
  passport: string;

  @Prop()
  driveLicence: string;

  @Prop()
  startRentDate:string;

  @Prop()
  endRentDate:string;

  @Prop()
  driveExperience:string;

  @Prop()
  price:number;
  
  @Prop()
 carBrand:string
 
}

export const OrderSchema = SchemaFactory.createForClass(Order);

