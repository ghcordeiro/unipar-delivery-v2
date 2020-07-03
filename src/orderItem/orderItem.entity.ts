import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, UpdateDateColumn, CreateDateColumn, ManyToMany, JoinColumn } from 'typeorm';
import { Order } from '../order/order.entity';
import { Product } from '../product/product.entity';

@Entity('order_item')
export class OrderItem {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => Order, order => order.orderItems)
  order: Order;

  @ManyToOne(type => Product, product => product.orderItem, { onDelete: 'SET NULL' })
  product: Product;

  @Column({ name: 'quantity', type: 'integer' })
  quantity: number;

  @Column({ name: 'unit_value', type: 'numeric', precision: 15, scale: 2 })
  unitValue: number;

  @Column({ name: 'total_value', type: 'numeric', precision: 15, scale: 2 })
  totalValue: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

}
