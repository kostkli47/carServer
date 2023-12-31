import { Module } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/shemas/user';

@Module({
    imports: [MongooseModule.forFeature([{name:User.name, schema: UserSchema}])],
    controllers: [UsersController],
    providers: [UsersService],
  })
export class UsersModule {}
