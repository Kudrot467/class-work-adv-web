import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    ParseIntPipe,
    ValidationPipe,
    UseGuards,
    UseInterceptors,
  } from '@nestjs/common';

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsGuard } from './products.guard';
import { MyInterceptor } from './products.intercepter';
  
  @Controller('products')
  @UseInterceptors(MyInterceptor)
  @UseGuards(ProductsGuard)
  export class ProductsController {
    constructor(private readonly productService: ProductsService) {}
  
    @Get()
    getAll() {
      return this.productService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.productService.findById(id);
    }
  
    @Post('create')
    createProduct(@Body(ValidationPipe) createProductDto: CreateProductDto) {
      return this.productService.create(createProductDto);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() productUpdate: []) {
      return { id, ...productUpdate };
    }
  }
  