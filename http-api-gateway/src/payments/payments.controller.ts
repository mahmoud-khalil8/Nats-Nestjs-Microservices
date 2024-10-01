import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePaymentDto } from './dto/createPayment.dto';

@Controller('users')
export class PaymentsController {

    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }

    @Post()
    createPayment(@Body() createPaymentDto: CreatePaymentDto) {

        this.natsClient.emit('createPayment', createPaymentDto)
    }

}