import { Controller, Post, Body, Get, Param, Delete, Put, Res } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { Response } from 'express';
import { plainToClass } from 'class-transformer';
import { OrderDTO } from './order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly service: OrderService) {
  }

  @Post()
  async save(@Body() orderDTO: OrderDTO) {
    const order = plainToClass(Order, orderDTO);
    return this.service.save(order);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(":id")
  findById(@Param() id: string) {
    return this.service.findById(id);
  }

  @Put(":id")
  async update(@Param() id: string, @Body() dto: OrderDTO) {
    const order = await this.findById(id);

    dto.deliveryDate ? delete order.deliveryDate : null;
    dto.totalValue ? delete order.totalValue : null;
    dto.discountAmount ? delete order.discountAmount : null;
    dto.productsValue ? delete order.productsValue : null;
    dto.shippingAddress ? delete order.shippingAddress : null;
    dto.shippingCompany ? delete order.shippingCompany : null;
    dto.orderItems.product ? delete dto.orderItems.product : null;
    dto.orderItems.quantity ? delete dto.orderItems.quantity : null;
    dto.orderItems.totalValue ? delete dto.orderItems.totalValue : null;
    dto.orderItems.unitValue ? delete dto.orderItems.unitValue : null;

    let orderUpdated = Object.assign(order, dto);

    return this.service.save(orderUpdated);
  }

  @Delete(":id")
  remove(@Param() id: string, @Res() res: Response) {
    this.service.delete(id);
    return res.status(200).json({ message: "The order was successfully deleted!" });
  }

}
