import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Permission } from './permission.entities';
import { Roles } from './roles.entities';
import { User } from 'src/modules/user/entities';

@Entity()
export class AccessControl {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Roles, (role: Roles) => role.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  role: Roles[];

  @OneToOne(() => Permission, (permission: Permission) => permission.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  permission: Permission;

  @OneToOne(() => User, (user: User) => user.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User;
}
