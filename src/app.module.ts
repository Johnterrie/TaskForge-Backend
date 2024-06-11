import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProjectModule } from './modules/project';
import { APP_PIPE } from '@nestjs/core';
import { AccessControlModule } from './modules/access-control-permissions';
import { AuditLogsModule } from './modules/audit-logs';
import { AuthModule } from './modules/auth';
import { CalenderModule } from './modules/calender';
import { IntegrationModule } from './modules/integrations';
import { KanbanModule } from './modules/kanban-board';
import { MiscellaneousModule } from './modules/miscellaneous';
import { NotificationModule } from './modules/notification-reminder';
import { ReportAnalysisModule } from './modules/report-analytics';
import { TaskModule } from './modules/task';
import { TimeTrackingModule } from './modules/time-tracking';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dataSourceOptions } from './iam/config/data-source';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    // UsersModule,
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
