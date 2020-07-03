import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {

  constructor(
    @InjectRepository(Customer)
    private readonly repository: Repository<Customer>) {
  }

  save(customer: Customer) {
    return this.repository.save(customer);
  }

  delete(id: string) {
    return this.repository.delete(id);
  }

  update(id: string, customer: Customer) {
    return this.repository.update(id, customer);
  }

  findAll() {
    return this.repository.find();
  }

  findById(id: string) {
    return this.repository.findOne(id);
  }

  findOne(cpf: string) {
    return this.repository.findOne({
      where: {
        cpf
      }
    })
  }
}
