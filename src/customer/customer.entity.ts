import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Order } from "../order/order.entity";

@Entity("customer")
export class Customer {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar', length: '80' })
  name: string;

  @Column({ name: 'cpf', type: 'varchar', length: '20', unique: true })
  cpf: string;

  @Column({ name: 'address', type: 'varchar', length: '80' })
  address: string;

  @Column({ name: 'cep', type: 'integer'})
  cep: number;

  @Column({ name: 'password', type: 'varchar', length: 200})
  password: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(type => Order, order => order.customer)
  order: Order;
}
