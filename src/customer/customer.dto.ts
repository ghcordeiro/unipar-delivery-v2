import { IsString, MaxLength, MinLength, IsNumber } from 'class-validator';

export class CustomerDTO {

  @IsString({ message: 'The value of the name field is not a valid date!' })
  @MinLength(5, { message: 'The field must be at least 5 characters long.' })
  @MaxLength(80, { message: 'The field must be a maximum of 80 characters.' })
  name: string;

  @IsString({ message: 'The value of the cpf is not a valid string!' })
  @MinLength(14, { message: 'The field must be at least 11 characters long.' })
  @MaxLength(14, { message: 'The field must be a maximum of 11 characters.' })
  cpf: string;

  @IsString({ message: 'The value of the address is not a valid string!' })
  @MinLength(5, { message: 'The field must be at least 5 characters long.' })
  @MaxLength(80, { message: 'The field must be a maximum of 80 characters.' })
  address: string;

  @IsNumber()
  cep: number;

}
