import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  postId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  productTitle: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productDetails: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  price: string;

}
