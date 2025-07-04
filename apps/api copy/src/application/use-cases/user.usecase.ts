import { UserService } from '@app/application/services';
import {
  UserCreateDto,
  UserResponseDto,
  UserUpdateDto,
} from '@app/domain/dtos';
import {
  User,
  VALIDATION_CODE_LIFETIME_IN_MINUTES,
} from '@app/domain/entities';
import { UserRepository } from '@app/infrastructure/persistence/repositories';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserUseCases {
  constructor(
    private readonly _userRepository: UserRepository,
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userService: UserService,
  ) {}

  /**
   * Registers a new user with the provided user payload.
   *
   * @param {UserCreateDto} userPayload - The data transfer object containing user creation details.
   * @returns {Promise<UserResponseDto>} A promise that resolves to the response data transfer object containing user details.
   *
   * @throws {Error} If there is an issue with user creation or mapping.
   */
  async registerUser(userPayload: UserCreateDto): Promise<UserResponseDto> {
    const payload = this._mapper.map(userPayload, UserCreateDto, User);

    const user = await this._userRepository.create({
      ...payload,
      password: this._userService.hashPassword(payload.password),
      verificationCode: this._userService.generateAlphaNumericCode(),
      codeLifetime: this._userService.generateDateLifetime(
        VALIDATION_CODE_LIFETIME_IN_MINUTES,
        'min',
      ),
    });

    const response = this._mapper.map(user, User, UserResponseDto);

    return response;
  }

  /**
   * Edits an existing user with the provided user payload.
   *
   * @param id - The unique identifier of the user to be edited.
   * @param userPayload - The data transfer object containing the updated user information.
   * @returns A promise that resolves to the updated user response data transfer object.
   *
   * @throws Will throw an error if the user update fails.
   */
  async editUser(
    id: string,
    userPayload: UserUpdateDto,
  ): Promise<UserResponseDto> {
    const payload = this._mapper.map(userPayload, UserUpdateDto, User);

    if (payload.password) {
      payload.password = this._userService.hashPassword(payload.password);
    }

    const user = await this._userRepository.update({ id }, payload);

    if (!user) {
      throw new NotFoundException();
    }

    const response = this._mapper.map(user, User, UserResponseDto);

    return response;
  }
}
