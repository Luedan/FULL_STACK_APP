import { Module } from '@nestjs/common';
import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { InfrastructureModule } from '@app/infrastructure/infrastructure.module';
import { PROFILES } from './profiles';
import { USE_CASES } from './use-cases';
import { SERVICES } from './services';
import { JwtModule } from '@nestjs/jwt';
import { envs } from '@app/config/env';

const profiles = [...PROFILES];
const useCases = [...USE_CASES];
const services = [...SERVICES];

@Module({
  imports: [
    InfrastructureModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    JwtModule.register({
      secret: envs.JWT_SECRET,
      signOptions: { expiresIn: '8h' },
      global: true,
    }),
  ],
  providers: [...profiles, ...useCases, ...services],
  exports: [...useCases, ...services],
})
export class ApplicationModule {}
