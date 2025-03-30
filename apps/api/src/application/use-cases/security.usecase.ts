import { UserService } from '@app/application/services';
import { envs } from '@app/config/env';
import {
  UserVerificationRequestDto,
  UserVerificationResponseDto,
  LoginRequestDto,
  LoginResponseDto,
} from '@app/domain/dtos/user/user-security.dto';

import { VALIDATION_CODE_LIFETIME_IN_MINUTES } from '@app/domain/entities';
import { UserRepository } from '@app/infrastructure/persistence/repositories';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SecurityUseCases {
  constructor(
    private readonly _userRepository: UserRepository,
    @InjectMapper() private readonly _mapper: Mapper,
    private readonly _userService: UserService,
    private readonly _jwtService: JwtService,
  ) {}

  /**
   * Verifies a user's email using a verification code.
   *
   * @param {UserVerificationRequestDto} verifyPayload - The payload containing the verification code and email.
   * @returns {Promise<UserVerificationResponseDto>} - A promise that resolves to the verification response.
   *
   * @throws {Error} If there is an issue with the user repository.
   */
  async verifyUser(
    verifyPayload: UserVerificationRequestDto,
  ): Promise<UserVerificationResponseDto> {
    const { code, email } = verifyPayload;
    const user = await this._userRepository.getOne({
      where: { email, verificationCode: code },
    });

    if (!user) {
      return {
        success: false,
        message: 'Invalid verification code.',
      };
    }

    if (
      user?.codeLifetime &&
      this._userService.isDateExpired(user.codeLifetime)
    ) {
      await this.resendVerificationCode(email);

      return {
        success: false,
        message: 'Verification code expired. A new code has been sent.',
      };
    }

    await this._userRepository.update(
      { id: user.id },
      {
        ...user,
        emailVerified: true,
        verificationCode: null,
        codeLifetime: null,
      },
    );

    return {
      success: true,
      message: 'User verified successfully.',
    };
  }

  /**
   * Resends a verification code to a user's email.
   *
   * @param email - The email address of the user to resend the verification code to.
   * @returns A promise that resolves to the response data transfer object.
   *
   * @throws Will throw an error if the user is not found.
   */
  async resendVerificationCode(
    email: string,
  ): Promise<UserVerificationResponseDto> {
    const user = await this._userRepository.getOne({ where: { email } });
    console.log(user, email);
    if (!user) {
      throw new NotFoundException();
    }

    await this._userRepository.update(
      { id: user.id },
      {
        ...user,
        verificationCode: this._userService.generateAlphaNumericCode(),
        codeLifetime: this._userService.generateDateLifetime(
          VALIDATION_CODE_LIFETIME_IN_MINUTES,
          'min',
        ),
      },
    );

    return {
      success: true,
      message: 'Verification code sent successfully.',
    };
  }

  /**
   * Logs in a user with the provided login credentials.
   *
   * @param {LoginRequestDto} loginPayload - The login request data transfer object containing the user's email and password.
   * @returns {Promise<LoginResponseDto>} A promise that resolves to a login response data transfer object containing the access token, refresh token, success status, and a message.
   *
   * @throws {Error} If there is an issue with the login process.
   */
  async loginUser(loginPayload: LoginRequestDto): Promise<LoginResponseDto> {
    const { email, password } = loginPayload;
    const user = await this._userRepository.getOne({ where: { email } });

    if (!user) {
      return {
        refreshToken: null,
        accessToken: null,
        success: false,
        message: 'Invalid email or password.',
      };
    }

    const isPasswordValid = this._userService.comparePassword(
      password,
      user.password,
    );

    if (!isPasswordValid) {
      return {
        refreshToken: null,
        accessToken: null,
        success: false,
        message: 'Invalid email or password.',
      };
    }

    const accessToken = this._jwtService.sign(
      { email, id: user.id, userType: user.userType },
      { expiresIn: envs?.JWT_ACCESS_TOKEN_EXPIRES_IN },
    );

    const refreshToken = this._jwtService.sign(
      { email, id: user.id, userType: user.userType },
      { expiresIn: envs?.JWT_REFRESH_TOKEN_EXPIRES_IN },
    );

    return {
      accessToken,
      refreshToken,
      success: true,
      message: 'User logged in successfully.',
    };
  }
}
