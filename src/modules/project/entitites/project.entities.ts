import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/modules/auth/entitites';
@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  project: string;

  @OneToMany(() => User, (member) => member.firstName)
  members: User[];
}
