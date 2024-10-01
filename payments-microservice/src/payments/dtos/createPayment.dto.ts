import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
export class CreatePaymentDto {

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    userId: string;

}