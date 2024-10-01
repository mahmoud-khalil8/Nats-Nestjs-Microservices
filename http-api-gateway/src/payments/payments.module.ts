import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/nats-client.ts/nats-client';
import { PaymentsController } from './payments.controller';
@Module({
    imports: [NatsClientModule],
    controllers: [PaymentsController],
    providers: [],
})
export class PaymentsModule { }