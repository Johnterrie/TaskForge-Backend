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
    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/../../modules/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
        synchronize: false,
        migrationsRun: true,
        logging: true,
        autoLoadEntities: true,
        retryDelay: 3000,
        retryAttempts: 10,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
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
