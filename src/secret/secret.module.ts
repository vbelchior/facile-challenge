import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EncriptService } from "./encript.service";
import { SecretController } from "./secret.controller";
import { SecretModel } from "./secret.model";
import { SecretService } from "./secret.service";

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([SecretModel])],
  controllers: [SecretController],
  providers: [EncriptService, SecretService],
  exports: [],
})
export class SecretModule {}
