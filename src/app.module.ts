import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import uploadConfig from './upload';

import { Customer } from './customer/customer.entity';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.contoller';

import { Product } from './product/product.entity';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.contoller';

import { Order } from './order/order.entity';
import { OrderService } from './order/order.service';
import { OrderController } from './order/order.contoller';

import { Stock } from './stock/stock.entity';
import { OrderItem } from './orderItem/orderItem.entity';

import { AuthService } from './auth/auth.service';
import { LocalStrategy } from './auth/local.strategy';
import { jwtConstants } from './auth/constants';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'docker',
      database: 'unipar-delivery',
      entities: [
        Customer,
        Product,
        Order,
        OrderItem,
        Stock
      ],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([
      Customer,
      Product,
      Order,
      OrderItem,
      Stock
    ]),
    MulterModule.register({
      dest: uploadConfig.directory,
      storage: uploadConfig.storage
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: uploadConfig.directory
    // }),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [
    CustomerController,
    ProductController,
    OrderController
  ],
  providers: [
    CustomerService,
    ProductService,
    OrderService,
    AuthService,
    LocalStrategy
  ],
  exports: [AuthService]
})

export class AppModule { }
