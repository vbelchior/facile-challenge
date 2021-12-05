import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SecretModel } from "./secret/secret.model";

import { SecretModule } from "./secret/secret.module";
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: "postgres",
      entities: [SecretModel],
      synchronize: true,
      autoLoadEntities: true,
      ssl: true,
    }),
    SecretModule,
  ],
})
export class AppModule {}
