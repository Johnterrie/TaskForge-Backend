import { Controller, Get } from '@nestjs/common';

@Controller('/projects/:projectId')
export class ReportAnalysisController {
  @Get('/reports')
  getReport() {
    return 'working';
  }

  @Get('/analytics')
  getAnalytics() {
    return 'working';
  }
}
