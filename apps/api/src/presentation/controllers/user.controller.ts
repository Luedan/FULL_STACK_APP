import { UserUseCases } from '@app/application/use-cases';
import { TransactionInterceptor } from '@app/common/interceptors/transaction.interceptor';
import {
  UserCreateDto,
  UserResponseDto,
  UserUpdateDto,
} from '@app/domain/dtos';

import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
@ApiBearerAuth()
export class UserController {
  constructor(private readonly _userUseCases: UserUseCases) {}

  @Post('register')
  @UseInterceptors(TransactionInterceptor)
  async registerUser(
    @Body() userPayload: UserCreateDto,
  ): Promise<UserResponseDto> {
    return this._userUseCases.registerUser(userPayload);
  }

  @Put('edit/:id')
  @UseInterceptors(TransactionInterceptor)
  async editUser(
    @Param('id') id: string,
    @Body() userPayload: UserUpdateDto,
  ): Promise<UserResponseDto> {
    return this._userUseCases.editUser(id, userPayload);
  }
}
