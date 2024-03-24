import {Controller, Get, Post, Body, HttpStatus, HttpCode, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({
    description:'user created response'
  })
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signUp(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @ApiBadRequestResponse({
    description:'user cannot register. try again!'
  })
  @Get('users')
  findAll() {
    return this.usersService.findAll();
  }
 
}
