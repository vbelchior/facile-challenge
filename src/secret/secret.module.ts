import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SecretController } from "./secret.controller";
import { SecretModel } from "./secret.model";
import { SecretService } from "./secret.service";

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forFeature([SecretModel])],
  controllers: [SecretController],
  providers: [SecretService],
  exports: [],
})
export class SecretModule {}
