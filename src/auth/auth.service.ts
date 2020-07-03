import { Injectable } from '@nestjs/common';
import { CustomerService } from '../customer/customer.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomerService,
    private jwtService: JwtService
  ) {}

  async validateCustomer(cpf: string, pass: string): Promise<any> {
    const customer = await this.customerService.findOne(cpf);
    if (customer && customer.password === pass) {
      const { password, ...result } = customer;
      return result;
    }
    return null;
  }

  async login(customer: any) {
    console.log(customer)
    const payload = { username: customer.username, sub: customer.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
