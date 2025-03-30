import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { HttpAdapter } from './adapters/http.service';

@Module({
  imports: [HttpModule],
  providers: [HttpAdapter],
  exports: [HttpAdapter],
})
@Global()
export class CommonModule {}
