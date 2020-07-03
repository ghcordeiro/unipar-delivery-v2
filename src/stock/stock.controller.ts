import { Controller, Post, Body, Get, Param, Delete, Put, Res } from '@nestjs/common';
import { StockService } from './stock.service';
import { Stock } from './stock.entity';

interface ProductDTO {
  name?: string;
  price?: number;
  stockQuantity?: number;
}

export class StockController {

  constructor(private readonly service: StockService) { }

  findById(id: string) {
    return this.service.findById(id);
  }

  async update(productId: string) {
    const stock = await this.findById(productId);
    stock.stockQuantity =- 1;
    return this.service.update(stock.id, stock.stockQuantity);
  }

}
