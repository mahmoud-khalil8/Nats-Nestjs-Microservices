import { IsEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class CreatePaymentDto {

    @IsNumber()
    @IsEmpty()
    amount: number;

    @IsNotEmpty()
    userId: string;
}