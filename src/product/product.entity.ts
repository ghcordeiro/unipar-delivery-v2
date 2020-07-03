import { Entity, Column, UpdateDateColumn, CreateDateColumn, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';
import { OrderItem } from '../orderItem/orderItem.entity';
import { Stock } from '../stock/stock.entity';

@Entity('product')
export class Product {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'code', type: 'varchar' })
  code: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'price', type: 'numeric', precision: 15, scale: 2 })
  price: number;

  @Column({ name: 'photo', type: 'varchar', length: 200, nullable: true})
  photo: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @OneToOne(type => Stock, stock => stock.product)
  stock: Stock;

  @OneToMany(type => OrderItem, orderItem => orderItem.product)
  orderItem: OrderItem;
}
