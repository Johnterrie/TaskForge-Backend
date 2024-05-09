import { Module } from '@nestjs/common';
import { ProjectController } from './controllers';
import { ProjectServices } from './services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEntity } from './entitites';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity])],
  controllers: [ProjectController],
  providers: [ProjectServices],
  exports: [],
})
export class ProjectModule {}
