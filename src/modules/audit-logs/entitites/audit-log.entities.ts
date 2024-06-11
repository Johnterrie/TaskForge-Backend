import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Audit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  logs: string;
}
