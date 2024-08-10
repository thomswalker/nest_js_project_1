import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [

    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'test',
      database: 'user',
      autoLoadEntities: true,
      synchronize: true,
      logging:true,
       schema: 'public',
    }),
    
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
