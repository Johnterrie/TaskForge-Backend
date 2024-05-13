import { Controller, Get } from '@nestjs/common';

@Controller('/audit-logs')
export class AuditLogsControllers {
  @Get()
  getAuditLogs() {
    return 'working';
  }

  @Get('/:logId')
  getSingleAuditLogs() {
    return 'working';
  }
}
