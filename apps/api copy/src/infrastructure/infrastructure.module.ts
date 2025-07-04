import { Module } from '@nestjs/common';
import { REPOSITORIES } from './persistence/repositories';

const repositories = [...REPOSITORIES];

@Module({
  providers: [...repositories],
  exports: [...repositories],
})
export class InfrastructureModule {}
