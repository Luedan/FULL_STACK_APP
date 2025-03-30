import { AutoMap } from '@automapper/classes';

export class UserResponseDto {
  @AutoMap()
  id: string;

  @AutoMap()
  email: string;

  @AutoMap()
  fullName: string;

  @AutoMap()
  isActive: boolean;

  @AutoMap()
  emailVerified: boolean;

  @AutoMap()
  isSuperuser: boolean;
}
