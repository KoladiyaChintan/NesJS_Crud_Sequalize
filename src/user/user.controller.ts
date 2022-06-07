import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<User> {
        const user = await this.userService.createUser(createUser);
        return user;
    }

    @Get()
    async getUser(): Promise<User[]> {
        return await this.userService.getUser()
    }

    @Get('/:id')
    async getUserByID(@Param('id') id: number): Promise<User> {
        return await this.userService.getUserByID(id)
    }

    @Delete('/:id')
    async deteleUserByID(@Param('id') id: string): Promise<any> {
        return await this.userService.deleteUseyByID(id)
    }
}
