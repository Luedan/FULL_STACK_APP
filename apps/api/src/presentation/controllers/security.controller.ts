import { SecurityUseCases } from '@app/application/use-cases/security.usecase';
import { Public } from '@app/common/decorators/public.decorator';
import { TransactionInterceptor } from '@app/common/interceptors/transaction.interceptor';
import {
  UserVerificationRequestDto,
  UserVerificationResponseDto,
  LoginRequestDto,
  LoginResponseDto,
} from '@app/domain/dtos/user/user-security.dto';

import { Body, Controller, Param, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('security')
@ApiTags('Security')
@Public()
export class SecurityController {
  constructor(private readonly _securityUseCases: SecurityUseCases) {}

  @Post('verify')
  @UseInterceptors(TransactionInterceptor)
  async verifyUser(
    @Body() verifyPayload: UserVerificationRequestDto,
  ): Promise<UserVerificationResponseDto> {
    return this._securityUseCases.verifyUser(verifyPayload);
  }

  @Post('resendVerificationCode/:email')
  @UseInterceptors(TransactionInterceptor)
  async resendVerificationCode(
    @Param('email') email: string,
  ): Promise<UserVerificationResponseDto> {
    return this._securityUseCases.resendVerificationCode(email);
  }

  @Post('login')
  async login(
    @Body() loginPayload: LoginRequestDto,
  ): Promise<LoginResponseDto> {
    return this._securityUseCases.loginUser(loginPayload);
  }
}
