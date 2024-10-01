import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @MaxLength(30)
    username: string;

    @IsOptional()
    @IsString()
    @MaxLength(40)
    displayName?: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}