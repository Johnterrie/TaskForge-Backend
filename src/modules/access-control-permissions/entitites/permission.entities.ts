import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Roles } from './roles.entities';
import { AccessControl } from './access-control.entities';
@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => AccessControl, (access: AccessControl) => access.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  access: AccessControl;
}
