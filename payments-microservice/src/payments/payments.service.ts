import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { InjectRepository } from "@nestjs/typeorm";
import { Payment } from "src/typeorm/entities/payment";
import { Repository } from "typeorm";
import { last, lastValueFrom } from "rxjs";
@Injectable()
export class PaymentsService {
    constructor(
        @InjectRepository(Payment) private paymentsRepository: Repository<Payment>,
        @Inject('NATS_SERVICE') private natsClient: ClientProxy
    ) { }
    async createPayment({ userId, ...createPaymentDto }: any) {
        const user = await lastValueFrom(this.natsClient.send('getUserById', userId));
        if (user) {
            const newPayment = this.paymentsRepository.create({ ...createPaymentDto, user });
            return this.paymentsRepository.save(newPayment);
        }
        return null;
    }
}