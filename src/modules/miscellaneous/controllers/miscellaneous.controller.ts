import { Controller, Get } from '@nestjs/common';

@Controller()
export class MiscellaneousController {
  @Get('/status')
  getStatus() {
    return 'working';
  }

  @Get('/health')
  getHealth() {
    return 'working';
  }

  @Get('/version')
  getVersion() {
    return 'working';
  }

  @Get('/documentation')
  getDocumentation() {
    return 'working';
  }

  @Get('/stats')
  getStats() {
    return 'working';
  }

  @Get('/usage')
  getUsage() {
    return 'working';
  }
}
