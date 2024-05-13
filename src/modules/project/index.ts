import { Module } from '@nestjs/common';
import { ProjectController } from './controllers';
import { ProjectServices } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entitites';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectController],
  providers: [ProjectServices],
  exports: [],
})
export class ProjectModule {}
