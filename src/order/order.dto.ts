import { IsString, MaxLength, MinLength, IsNumber, IsDate } from 'class-validator';
import { Optional } from '@nestjs/common';
import { OrderItem } from '../orderItem/orderItem.entity';

export class OrderDTO {

  @IsDate({ message: 'The value of the deliveryDate field is not a valid date!' })
  deliveryDate: Date;

  @IsString({ message: 'The value of the shippingCompany field is not a valid string!' })
  @MinLength(5, { message: 'The field must be at least 5 characters long.' })
  @MaxLength(80, { message: 'The field must be a maximum of 80 characters.' })
  shippingCompany: string;

  @IsString({ message: 'The value of the shippingAddress field is not a valid string!' })
  @MinLength(5, { message: 'The field must be at least 5 characters long.' })
  @MaxLength(80, { message: 'The field must be a maximum of 80 characters.' })
  shippingAddress: string;

  @IsNumber()
  totalValue: number;

  @IsNumber()
  productsValue: number;

  @Optional()
  @IsNumber()
  discountAmount: number;

  orderItems: OrderItem;
}
