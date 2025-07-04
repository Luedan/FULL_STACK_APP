import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class UserUpdateDto {
  @AutoMap()
  @IsEmail()
  @IsOptional()
  email: string;

  @AutoMap()
  @IsString()
  @IsOptional()
  password: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
