import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  tel: string;

  @Prop()
  driveExperience: string;

  @Prop()
  passport: number;

  @Prop()
  driveLicence:number;

  
}

export const UserSchema = SchemaFactory.createForClass(User);


