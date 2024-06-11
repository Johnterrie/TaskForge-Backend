import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { AccessControl } from './access-control.entities';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => AccessControl, (access: AccessControl) => access.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  access: AccessControl;
}
