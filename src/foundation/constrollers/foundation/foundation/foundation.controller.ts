import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class FoundationController {
  @Get('/healthcheck')
  healthcheck() {
    const uptime = process.uptime();
    return {
      data: !!uptime,
      uptime,
    };
  }
}
