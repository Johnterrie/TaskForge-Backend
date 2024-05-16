import { Get, Post, Put, Delete, Controller } from '@nestjs/common';

@Controller('/projects')
export class ProjectController {
  @Get()
  getAllProject() {
    return 'get all project';
  }

  @Post()
  addProject() {
    return 'add project';
  }

  @Get('/:id')
  getSingleProject() {
    return 'get single Project';
  }

  @Put('/:id')
  updateSingleProject() {
    return 'update single Project';
  }

  @Delete('/:id')
  deleteProject() {
    return 'delete project';
  }

  @Get('/:id/members')
  getSingleProjectMembers() {
    return 'get members of the project';
  }

  @Post('/:id/members')
  addMembersToProject() {
    return 'add members to a project';
  }

  @Delete('/:id/members/:userId')
  deleteMembersFromProject() {
    return 'delete members from project';
  }
}
