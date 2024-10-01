import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './typeorm/entities/payment';
import { user } from './typeorm/entities/User';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'mysqsl_db',
    port: 3307,
    database: 'nestjs_db',
    entities: [Payment, user],
    synchronize: true,
    username: 'testuser',
    password: 'testuser123'

  }), PaymentsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
