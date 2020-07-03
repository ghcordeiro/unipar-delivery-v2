import { IsString, MaxLength, MinLength, IsNumber } from 'class-validator';

export class ProductDTO {

  @IsString({ message: 'The value of the code field is not a valid string!' })
  @MinLength(5, { message: 'The field must be at least 5 characters long.' })
  @MaxLength(80, { message: 'The field must be a maximum of 80 characters.' })
  code: string;

  @IsString({ message: 'The value of the name field is not a valid string!' })
  @MinLength(5, { message: 'The field must be at least 5 characters long.' })
  @MaxLength(80, { message: 'The field must be a maximum of 80 characters.' })
  name: string;

  @IsNumber()
  price: number;

}
