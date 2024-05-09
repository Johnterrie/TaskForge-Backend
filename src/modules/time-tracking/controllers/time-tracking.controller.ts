import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('/projects/:projectId')
export class TimeTrackingController {
  @Post('/tasks/:taskId/time-tracker/start')
  timeTrackingStart() {
    return 'working';
  }

  @Post('/tasks/:taskId/time-tracker/stop')
  timeTrackingStop() {
    return 'working';
  }

  @Get('/time-tracker')
  timeTracker() {
    return 'working';
  }

  @Get('/tasks/:taskId/time-tracker')
  taskTimeTracker() {
    return 'working';
  }

  @Delete('/tasks/:taskId/time-tracker/:trackerId')
  deleteTimeTracker() {
    return 'working';
  }
}
