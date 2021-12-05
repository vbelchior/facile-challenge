import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SecretModel } from "./secret/secret.model";

import { SecretModule } from "./secret/secret.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "ec2-18-210-159-154.compute-1.amazonaws.com",
      port: 5432,
      username: "kuytlwpszqqpou",
      password:
        "cc560e868027f2f2575c26d4ba892a32512142edf3c5ad43611e05d56ad08638",
      database: "d4g8i3s6l788hm",
      schema: "public",
      entities: [SecretModel],
      synchronize: true,
      autoLoadEntities: true,
    }),
    SecretModule,
  ],
})
export class AppModule {}
