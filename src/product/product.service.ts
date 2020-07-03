import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>) {
  }

  save(product: Product) {
    return this.repository.save(product);
  }

  update(id: string, product: Product) {
    return this.repository.update(id, product);
  }

  delete(id: string) {
    return this.repository.delete(id);
  }

  findAll() {
    return this.repository.find();
  }

  findById(id: string) {
    return this.repository.findOne(id);
  }
}
