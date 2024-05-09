import { Controller, Delete, Get, Put } from '@nestjs/common';

@Controller('/notifications')
export class NotificationController {
  @Get()
  getAllNotification() {
    return 'working';
  }

  @Get('/notifications/:notificationI')
  getSingleNotification() {
    return 'working';
  }

  @Put('/notifications/:notificationId/mark-as-read')
  markAsRead() {
    return 'working';
  }

  @Delete('/notifications/:notificationId')
  timeTracker() {
    return 'working';
  }
}
