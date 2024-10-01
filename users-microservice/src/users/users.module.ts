import { Module } from '@nestjs/common';
import { UsersMicroservicesController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user } from 'src/typeorm/entities/User';
import { Payment } from 'src/typeorm/entities/payment';
@Module({
    imports: [TypeOrmModule.forFeature([user, Payment])],
    controllers: [UsersMicroservicesController],
    providers: [UsersService],
    exports: []
})
export class UsersModule { }