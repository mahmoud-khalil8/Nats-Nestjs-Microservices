import { Module } from '@nestjs/common';
import { PaymentsMicroservicesController } from './payments.controller';
import { NatsClientModule } from 'src/nats-client.ts/nats-client';
import { PaymentsService } from './payments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/typeorm/entities/payment';
import { user } from 'src/typeorm/entities/User';
@Module({
    imports: [
        TypeOrmModule.forFeature([Payment, user]),
        NatsClientModule],
    controllers: [PaymentsMicroservicesController],
    providers: [PaymentsService],
    exports: []
})
export class PaymentsModule { }