import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/project/:projectId/tasks')
export class TaskController {
  // get all task attached to a single project
  @Get()
  getAllProjectTask() {
    return 'get all project';
  }

  // add task to a single project
  @Post()
  PostTaskToProject() {
    return 'get all project';
  }

  // get a single task in a project
  @Get('/:taskId')
  getSingleTask() {
    return 'get all project';
  }

  // update single task in a project
  @Put('/:taskId')
  updateSingleTask() {
    return 'get all project';
  }

  // delete single task in a project
  @Delete('/:taskId')
  deleteSingleTask() {
    return 'get all project';
  }

  // add comment to single task in a project
  @Post('/:taskId/comments')
  addCommentToSingleTask() {
    return 'get all project';
  }

  // get all comment of task
  @Get('/:taskId/comments')
  getAllCommentInSingleTask() {
    return 'get all project';
  }

  // get all comment of task
  @Put('/:taskId/comments/:commentId')
  updateSingleCommentInSingleTask() {
    return 'get all project';
  }

  @Delete('/:taskId/comments/:commentId')
  deleteSingleCommentInSingleTask() {
    return 'get all project';
  }

  @Post('/:taskId/attachments')
  addAttachmentToSingleTask() {
    return 'get all project';
  }

  @Get('/:taskId/attachments')
  GetAllAttachmentOfSingleTask() {
    return 'get all project';
  }

  @Delete('/:taskId/attachments/:attachmentId')
  deleteAttachmentInSingleTask() {
    return 'get all project';
  }
}
