import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from './cars.controller';
import { CarsService } from 'src/services/cars/cars.service';
import { Cars, CarsSchema } from 'src/shemas/cars';

@Module({
    imports: [MongooseModule.forFeature([{name:Cars.name, schema: CarsSchema}])],
    controllers: [CarsController],
    providers: [CarsService],
  })
export class CarsModule {}
