import { IsEmail, IsString } from 'class-validator';

export class UserVerificationRequestDto {
  @IsEmail()
  email: string;

  @IsString()
  code: string;
}

export class UserVerificationResponseDto {
  success: boolean;
  message: string;
}

export class LoginRequestDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class LoginResponseDto {
  accessToken: string | null;

  refreshToken: string | null;

  message: string;

  success: boolean;
}
