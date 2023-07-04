import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarsDocument = HydratedDocument<Cars>;

@Schema()
export class Cars {
  @Prop()
  class: string;

  @Prop()
  year: string;

  @Prop()
  body: string;

  @Prop()
  box: string;

  @Prop()
  engine:string;

  @Prop()
  horsepower:string;

  @Prop()
  deposit:string;

  @Prop()
  price:string;

  @Prop()
  img:string;

  @Prop()
  brand:string;

}


  


export const CarsSchema = SchemaFactory.createForClass(Cars);
