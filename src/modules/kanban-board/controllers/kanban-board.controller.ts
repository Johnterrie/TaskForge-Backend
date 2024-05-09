import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/projects/:projectId/kanban')
export class KanbanController {
  @Get()
  getAllKaban() {
    return 'working';
  }
  @Post('/columns')
  addKabanColumn() {
    return 'working';
  }
  @Put('/columns/:columnId')
  updateKabanColumn() {
    return 'working';
  }

  @Delete('/columns/:columnId')
  deleteKabanColumn() {
    return 'working';
  }

  @Post('tasks/:taskId/move')
  moveKandanThroughTask() {
    return 'working';
  }
}
