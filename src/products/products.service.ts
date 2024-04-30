import { Injectable, NotFoundException } from '@nestjs/common';
import {  UpdateProductDto } from './dto/update-product.dto';
import {  Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product) private readonly productRepo: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
     const product =await this.productRepo.create(createProductDto);
    return await this.productRepo.save(product);
  }

  async findAll() {
    return await this.productRepo.find({});
  }

  async findById(id: number) {
    return await this.productRepo.find({ where: { productId : id} });
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const existingProducts = await this.findById(id);
    if (!existingProducts || existingProducts.length === 0) {
      throw new NotFoundException(`product with ID ${id} not found`);
    }
    
    const existingProduct = existingProducts[0]; // Access the first element of the array
    
    // Update the existing product with properties from the updateproductDto
    existingProduct.productTitle = updateProductDto.productTitle ?? existingProduct.productTitle;
    existingProduct.productDetails = updateProductDto.productDetails ?? existingProduct.productDetails;
    existingProduct.price=updateProductDto.price ?? existingProduct.price;
    // Save the updated product to the database
    return await this.productRepo.save(existingProduct);
}

  async remove(id: number): Promise<void> {
    const existingProduct = await this.findById(id);
    if (!existingProduct) {
      throw new NotFoundException(`product with ID ${id} not found`);
    }
    await this.productRepo.delete(id);
  }
}
