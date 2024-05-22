import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Calendar {
  @PrimaryGeneratedColumn()
  id: number;
}
