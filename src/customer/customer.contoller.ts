import { Controller, Post, Body, Get, Param, Delete, Put, Res, UseGuards, Req } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDTO } from './customer.dto';
import { Customer } from './customer.entity';
import { Response } from 'express';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthService } from '../auth/auth.service';

@Controller('customer')
export class CustomerController {
  private readonly authService: AuthService;

  constructor(private readonly service: CustomerService) { }

  @Post()
  save(@Body() customer: Customer) {
    return this.service.save(customer);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(":id")
  findById(@Param() id: string) {
    return this.service.findById(id);
  }

  @Put(":id")
  async update(@Param() id: string, @Body() { name, address, cep }: CustomerDTO) {
    const customer = await this.findById(id);
    name ? delete customer.name : null;
    address ? delete customer.address : null;
    cep ? delete customer.cep : null;

    let customerUpdated = Object.assign(customer, { name, address, cep });

    return this.service.save(customerUpdated);
  }

  @Delete(":id")
  remove(@Param() id: string, @Res() res: Response) {
    this.service.delete(id);
    return res.status(200).json({ message: "The client was successfully deleted!" });
  }

  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Req() req) {
    console.log(req)
    return this.authService.login(req.user);
  }
}
