import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { userProvider } from './user.providers';
import { UserService } from './user.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService, ...userProvider],
  controllers: [UserController]
})
export class UserModule { }
