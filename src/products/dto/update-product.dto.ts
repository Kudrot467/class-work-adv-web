import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty()
    @IsOptional()
    @IsString()
    productTitle?: string;
  
    @ApiProperty()
    @IsOptional()
    @IsString()
    productDetails?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    price?: string;
  
}
