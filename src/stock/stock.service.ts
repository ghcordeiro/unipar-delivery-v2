import { Injectable, Options } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Stock } from './stock.entity';
import { Product } from '../product/product.entity';

@Injectable()
export class StockService {

  private readonly productRepo: Repository<Product>

  constructor(
    @InjectRepository(Stock)
    private readonly repository: Repository<Stock>
    ) {
  }

  update(id: string, stock: number) {
    return this.repository.update(id, { stockQuantity: stock });
  }

  findById(id: string) {
    const product = this.productRepo.findOne(id);
    return this.repository.findOne({
      where: {
        product: product
      }
    });
  }
}
