import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncriptService } from './encript.service';
import { SecretController } from './secret.controller';
import { SecretModel } from './secret.model';
import { SecretService } from './secret.service';

@Module({
  imports: [TypeOrmModule.forFeature([SecretModel])],
  controllers: [SecretController],
  providers: [EncriptService, SecretService],
  exports: [],
})
export class SecretModule {}
