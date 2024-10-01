import { Body, Controller, Get, HttpException, HttpStatus, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { lastValueFrom } from 'rxjs';

@Controller('users')
export class UsersController {

    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) { }
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {

        return this.natsClient.send({ cmd: 'create_user' }, createUserDto)
    }
    @Get(':id')
    async getUserById(@Body() id: any) {
        const user = await lastValueFrom(this.natsClient.send({ cmd: 'get_users_byId' }, { userId: id }));
        if (user) {
            return user;
        }
        else {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
    }

}