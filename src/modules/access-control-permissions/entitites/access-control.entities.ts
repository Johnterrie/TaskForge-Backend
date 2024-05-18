import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from 'src/modules/project/entitites';
@Entity()
export class AccessControl {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role: string;

  @OneToMany(() => Project, (project) => project.id)
  project: Project[];
}
