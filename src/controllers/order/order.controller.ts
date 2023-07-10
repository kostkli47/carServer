import { Body, Controller, Delete, HttpException, HttpStatus, Post } from '@nestjs/common';
import { OrderDto } from 'src/dto/order-dto';
import { OrderService } from 'src/services/order/order.service';
import { Order } from 'src/shemas/order';

@Controller('order')
export class OrderController {
    constructor (private orderService:OrderService){}

    @Post()
    initOrder(@Body() data:OrderDto):Promise <Order>  {
        /* const orderData = new OrderDto (data.username, data.tel,data.startRentDate, data.endRentDate, data.passport, data.driveExperience, data.driveLicence, data.price, data.carBrand);
        this.orderService.sendOrder(orderData)
 */
        return this.orderService.orderRegUser(data.carBrand,data.startRentDate, data.endRentDate).then((queryRes) => {
            console.log('data reg', queryRes)
            if (queryRes.length === 0) {
                return this.orderService.sendOrder(data);
            } else {
                console.log('err - user is exists')
                throw new HttpException ({
                  status:HttpStatus.CONFLICT,
                  errorText: 'К сожалению, на выбранные даты автомобиль забронирован!'
                }, HttpStatus.CONFLICT)
            }
        });
        
    }

    @Delete()
    deleteOrders(): Promise<Order> {
        return this.orderService.deleteOrders();
    }

}
