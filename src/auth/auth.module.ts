import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleStrategy } from './utils/GoogleStrategy';
import { User } from 'src/typeorm/User';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AtStrategy } from './utils/TokenStrategy';
import { RtStrategy } from './utils/RTokenStrategy';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({})],
  controllers: [AuthController],
  providers: [GoogleStrategy, AtStrategy, RtStrategy, AuthService],
})
export class AuthModule {}
