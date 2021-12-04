import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecretModel } from './secret/secret.model';

import { SecretModule } from './secret/secret.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'challenge',
      schema: 'public',
      entities: [SecretModel],
      synchronize: true,
      autoLoadEntities: true,
    }),
    SecretModule,
  ],
})
export class AppModule {}
