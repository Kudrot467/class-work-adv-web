import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Repository } from 'typeorm';
import { Product } from 'src/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly productRepo: Repository<Product>,
  ) {}

  // private users = [
  //   {
  //     id: 1,
  //     name: 'alamin',
  //     email: 'alain@aiub.edu',
  //     password: 'xyz',
  //   },
  //   {
  //     id: 2,
  //     name: 'abc',
  //     email: 'abc@aiub.edu',
  //     password: '123',
  //   },
  //   {
  //     id: 3,
  //     name: 'pqr',
  //     email: 'pqr@aiub.edu',
  //     password: 'pqr',
  //   },
  // ];

  async findAll() {
    //return this.users;
    return await this.productRepo.find({});
  }

  async findById(id: number) {
    //return this.users.find((user) => user.id === id);
    return await this.productRepo.find({ where: { id: id } });
  }

  async create(createProductDto: CreateProductDto) {
    // const lastId = [...this.users].sort((a, b) => b.id - a.id);
    // const newUser = {
    //   id: lastId[0].id + 1,
    //   ...createUserDto,
    // };
    // this.users.push(newUser);
    //return newUser;

    const product = await this.productRepo.create(createProductDto);
    return await this.productRepo.save(product);
  }
}
