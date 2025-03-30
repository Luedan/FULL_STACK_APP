import { envs } from '@app/config/env';
import { ENTITIES } from '@app/domain/entities';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'main',
      type: 'postgres',
      url: envs.DATABASE_URL,
      entities: [...ENTITIES],
      logging: true,
      synchronize: envs.ENVIRONMENT !== 'development' ? false : true,
    }),
  ],
})
@Global()
export class DatabaseModule {}
