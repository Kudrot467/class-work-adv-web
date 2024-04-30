import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductsModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('users');
    consumer.apply(AuthMiddleware).forRoutes('products');
  }
}
