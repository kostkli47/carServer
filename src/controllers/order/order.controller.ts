import { Body, Controller, Post } from '@nestjs/common';
import { OrderDto } from 'src/dto/order-dto';
import { OrderService } from 'src/services/order/order.service';

@Controller('order')
export class OrderController {
    constructor (private orderService:OrderService){}

    @Post()
    initOrder(@Body() data:OrderDto):void {
        const orderData = new OrderDto (data.username, data.tel,data.startRentDate, data.endRentDate, data.passport, data.driveExperience, data.driveLicence, data.price, data.carBrand);
        this.orderService.sendOrder(orderData)
        
    }

}
