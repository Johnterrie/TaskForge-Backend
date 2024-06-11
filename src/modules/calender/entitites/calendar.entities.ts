import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { Project } from 'src/modules/project/entitites';

@Entity()
export class Calendar {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Project, (project: Project) => project.id, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  project: Project;

  calender: string;

  event: string;
}
