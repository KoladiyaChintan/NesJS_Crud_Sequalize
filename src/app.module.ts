import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'Login',
      autoLoadModels:true,
      synchronize: true
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
