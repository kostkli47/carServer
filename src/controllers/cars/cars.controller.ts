import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from 'src/services/cars/cars.service';
import { Cars } from 'src/shemas/cars';

@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService) {}
 
 
    @Get() 
    getCars(): Promise<Cars[]> {
        return this.carsService.getCars();
    }

    @Get(":_id")
    getCarsById(@Param('_id') _id): Promise<Cars> {
        return this.carsService.getCarsById(_id);
    }
}

   