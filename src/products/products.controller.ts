import { Controller, Get, Post, Body, Param, Delete, Put, ValidationPipe } from '@nestjs/common';
import {  ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import {  UpdateProductDto } from './dto/update-product.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiCreatedResponse({
    description:'Product created'
  })
  @Post('createProduct')
  create(@Body(ValidationPipe) createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @ApiBadRequestResponse({
    description:'No Posts to show'
  })
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @ApiBadRequestResponse({
    description:'Invalid post id!'
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findById(+id);
  }

  @ApiBadRequestResponse({
    description:'No existing post'
  })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
