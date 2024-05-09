import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './services';
import { ProjectModule } from '../project';
import { APP_PIPE } from '@nestjs/core';
// import { ScheduleModule } from "@nestjs/schedule"
import { AppController } from './services/app.controller';
import { AccessControlModule } from '../access-control-permissions';
import { AuditLogsModule } from '../audit-logs';
import { AuthModule } from '../auth';
import { CalenderModule } from '../calender';
import { IntegrationModule } from '../integrations';
import { KanbanModule } from '../kanban-board';
import { MiscellaneousModule } from '../miscellaneous';
import { NotificationModule } from '../notification-reminder';
import { ReportAnalysisModule } from '../report-analytics';
import { TaskModule } from '../task';
import { TimeTrackingModule } from '../time-tracking';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.stage.${process.env.STAGE}`],
    }),
    TypeOrmModule.forRoot(),
    ProjectModule,
    AccessControlModule,
    AuditLogsModule,
    AuthModule,
    CalenderModule,
    IntegrationModule,
    KanbanModule,
    MiscellaneousModule,
    NotificationModule,
    ReportAnalysisModule,
    TaskModule,
    TimeTrackingModule,
    // ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
