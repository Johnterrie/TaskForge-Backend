import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('/projects/:projectId/calendar')
export class CalenderController {
  @Get()
  getProjectCalendar() {
    return 'working';
  }

  @Post('/events')
  postProjectCalendarEvent() {
    return 'working';
  }

  @Put('/events/:eventId')
  updateProjectCalendarEvent() {
    return 'working';
  }

  @Delete('/events/:eventId')
  deleteProjectCalendarEvent() {
    return 'working';
  }
}
