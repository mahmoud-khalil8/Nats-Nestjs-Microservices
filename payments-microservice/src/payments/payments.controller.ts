import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, EventPattern, Payload } from "@nestjs/microservices";
import { CreatePaymentDto } from "./dtos/createPayment.dto";
import { PaymentsService } from "./payments.service";

@Controller()
export class PaymentsMicroservicesController {

    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy,
        private paymentsService: PaymentsService
    ) { }
    @EventPattern('createPayment')
    async createPayment(@Payload() data: CreatePaymentDto) {
        const newPayment = await this.paymentsService.createPayment(data);
        if (newPayment) {
            this.natsClient.emit('paymentCreated', newPayment);
        }
        else {
            this.natsClient.emit('paymentFailed', data);
        }
    }

}