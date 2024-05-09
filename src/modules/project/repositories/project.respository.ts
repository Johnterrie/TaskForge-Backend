import { Repository, EntityRepository } from 'typeorm';
import { ProjectEntity } from '../entitites';

@EntityRepository(ProjectEntity)
export class ProjectRepository extends Repository<ProjectEntity> {}
