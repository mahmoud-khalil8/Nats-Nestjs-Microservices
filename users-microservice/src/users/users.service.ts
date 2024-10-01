import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { user } from "src/typeorm/entities/User";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/createUser.dto";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(user) private userRepository: Repository<user>) { }
    createUser(data: CreateUserDto) {
        const newUser = this.userRepository.create(data);
        return this.userRepository.save(newUser);
    }

    getUserById(userId: string) {
        return this.userRepository.findOne({
            where: { id: userId },
            relations: ['payments']
        });

    }

}