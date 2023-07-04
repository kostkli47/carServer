import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cars, CarsDocument } from 'src/shemas/cars';

@Injectable()
export class CarsService {
    constructor(@InjectModel(Cars.name) private carsModel: Model<CarsDocument>) {
        console.log('carsService run')
    }
 
 
    async getCars(): Promise<Cars[]> {
        return this.carsModel.find();
    }


    async getCarsById(_id): Promise<Cars> {
        return this.carsModel.findById(_id);
    }
}