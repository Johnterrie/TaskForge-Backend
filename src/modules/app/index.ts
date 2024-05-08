import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config"
import { AppService } from "./services";
import { ProjectModule } from "../project";
import { APP_PIPE } from "@nestjs/core";
// import { ScheduleModule } from "@nestjs/schedule"
import { AppController } from "./services/app.controller";

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true, 
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      // validationSchema: ConfigValidationSchema,
    }),
    ProjectModule,
    // ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule{}

