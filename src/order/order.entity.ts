import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, UpdateDateColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Customer } from '../customer/customer.entity';
import { OrderItem } from "../orderItem/orderItem.entity";

@Entity('order')
export class Order {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'order_number', type: 'integer', generated: true, generatedType: 'STORED' })
  orderNumber: number;

  @Column({ name: 'order_date', type: 'timestamp with time zone', default: 'now()' })
  orderDate: Date;

  @Column({ name: 'delivery_date', type: 'timestamp with time zone' })
  deliveryDate: Date;

  @Column({ name: 'shipping_company', type: 'varchar', length: 80 })
  shippingCompany: string;

  @Column({ name: 'shipping_address', type: 'varchar', length: 80 })
  shippingAddress: string;

  @Column({ name: 'total', type: 'numeric', precision: 15, scale: 2 })
  totalValue: number;

  @Column({ name: 'products_value', type: 'numeric', precision: 15, scale: 2 })
  productsValue: number;

  @Column({ name: 'discount_amount', type: 'numeric', precision: 15, scale: 2 })
  discountAmount: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(type => Customer, customer => customer.order, { cascade: true, eager: true, onDelete: 'SET NULL' })
  customer: Customer;

  @OneToMany(type => OrderItem, orderItem => orderItem.order, { cascade: true, eager: true, onDelete: 'CASCADE' })
  orderItems: OrderItem[];

}
