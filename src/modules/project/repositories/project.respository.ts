import { Repository, EntityRepository } from 'typeorm';
import { Project } from '../entitites';

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {}
