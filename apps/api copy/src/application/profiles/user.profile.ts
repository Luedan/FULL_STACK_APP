import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import {
  UserCreateDto,
  UserResponseDto,
  UserUpdateDto,
} from '@app/domain/dtos';
import { User } from '@app/domain/entities';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, UserCreateDto, User);
      createMap(mapper, UserUpdateDto, User);
      createMap(mapper, User, UserResponseDto);
    };
  }
}
