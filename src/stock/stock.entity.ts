import { Entity, Column, UpdateDateColumn, CreateDateColumn, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity('stock')
export class Stock {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'stock_quantity', type: 'numeric', precision: 15, scale: 3 })
  stockQuantity: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @OneToOne(type => Product, product => product.stock)
  product: Product;
}
