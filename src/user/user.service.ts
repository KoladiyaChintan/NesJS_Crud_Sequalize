import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(@Inject('USER_REPOSITORY') private readonly USER_REPOSITORY: typeof User) { }

    async createUser(createUser: CreateUserDto): Promise<User> {
        return await this.USER_REPOSITORY.create(createUser);
    }

    async getUser(): Promise<User[]> {
        return await this.USER_REPOSITORY.findAll()
    }

    async getUserByID(id: number): Promise<User> {
        return await this.USER_REPOSITORY.findOne({ where: { id } })
    }

    async deleteUseyByID(id: string): Promise<any> {
        const count = await this.USER_REPOSITORY.destroy({ where: { id } })
        if (!count) {
            return new NotFoundException
        }
    }
}
