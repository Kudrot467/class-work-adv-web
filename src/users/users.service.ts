import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ){}
  async findByUsername(username: string): Promise<User | undefined>{
    return await this.userRepository.findOne({ where: { username }});
  }
  async create(createUserDto: CreateUserDto): Promise<User>{
    const newUser = await this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }
  async findAll(){
    return await this.userRepository.find({});
  }
}
