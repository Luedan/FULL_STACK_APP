import { AutoMap } from '@automapper/classes';
import { IsEmail, IsString } from 'class-validator';

export class UserCreateDto {
  @AutoMap()
  @IsEmail()
  email: string;

  @AutoMap()
  @IsString()
  password: string;
}
