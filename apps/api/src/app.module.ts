import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './common/database/database.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [CommonModule, DatabaseModule, PresentationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
