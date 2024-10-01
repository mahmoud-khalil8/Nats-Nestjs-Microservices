import { Controller } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UsersService } from "./users.service";

@Controller()
export class UsersMicroservicesController {

    constructor(private usersService: UsersService) { }
    @MessagePattern({ cmd: 'create_user' })
    createUser(@Payload() data: CreateUserDto) {
        return this.usersService.createUser(data);
    }
    @MessagePattern({ cmd: 'get_users_byId' })
    async getUserById(@Payload() data) {
        const { userId } = data;
        const findUser = await this.usersService.getUserById(userId);
        return findUser;

    }
    @EventPattern('paymentCreated')
    async paymentCreated(@Payload() data: any) {
        console.log('Payment created', data);
    }
}