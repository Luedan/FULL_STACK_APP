import { ApplicationModule } from '@app/application/application.module';
import { Module } from '@nestjs/common';
import { CONTROLLERS } from './controllers';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@app/common/guards/auth.guard';

const controllers = [...CONTROLLERS];

@Module({
  imports: [ApplicationModule],
  controllers,
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class PresentationModule {}
