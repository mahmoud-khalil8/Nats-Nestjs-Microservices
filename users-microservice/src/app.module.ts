import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from './typeorm/entities/User';
import { Payment } from './typeorm/entities/payment';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysqsl_db',
      port: 3307,
      database: 'nestjs_db',
      entities: [user, Payment],
      synchronize: true,
      username: 'testuser',
      password: 'testuser123'

    }),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
