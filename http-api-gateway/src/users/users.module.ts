import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { NatsClientModule } from 'src/nats-client.ts/nats-client';
@Module({
    imports: [NatsClientModule],
    controllers: [UsersController],
    providers: [],
})
export class UsersModule { }