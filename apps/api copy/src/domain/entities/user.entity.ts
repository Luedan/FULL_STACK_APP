import { AutoMap } from '@automapper/classes';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserType {
  ROOT = 'root',
  NORMAL = 'normal',
}

@Entity({
  schema: 'security',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  @AutoMap()
  id: string;

  @Column({ unique: true })
  @AutoMap()
  email: string;

  @Column()
  @AutoMap()
  password: string; // Hasheado con bcrypt

  @Column({ default: true })
  @AutoMap()
  isActive: boolean;

  @Column({ default: false })
  @AutoMap()
  emailVerified: boolean;

  @Column({ enum: UserType, default: UserType.NORMAL, type: 'enum' })
  @AutoMap()
  userType: UserType;

  @Column({ nullable: true, type: 'varchar' })
  @AutoMap()
  verificationCode: string | null;

  @Column({ nullable: true, type: 'timestamp' })
  @AutoMap()
  codeLifetime: Date | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
