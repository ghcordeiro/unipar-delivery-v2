import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(Order)
    private readonly repository: Repository<Order>) {
  }

  save(order: Order) {
    return this.repository.save(order);
  }

  delete(id: string) {
    return this.repository.delete(id);
  }

  update(id: string, order: Order) {
    return this.repository.update(id, order);
  }

  findAll() {
    return this.repository.find();
  }

  findById(id: string) {
    return this.repository.findOne(id);
  }

}
