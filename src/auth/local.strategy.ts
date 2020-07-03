import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(cpf: string, password: string): Promise<any> {
    const customer = await this.authService.validateCustomer(cpf, password);
    if (!customer) {
      throw new UnauthorizedException();
    }
    return customer;
  }
}
