import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './services';
import { ProjectModule } from '../project';
import { APP_PIPE } from '@nestjs/core';
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

const dbConfig = require('../../utils');

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   envFilePath: [`.env.${process.env.NODE_ENV}`],
    // }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['**/*.entity.js'],
      synchronize: false,
      migrations: ['migrations/*.js'],
    }),
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
