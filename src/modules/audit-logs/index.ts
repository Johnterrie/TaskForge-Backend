import { Module } from "@nestjs/common";
import { AuditLogsControllers } from "./controllers";
import { AuditLogsService } from "./services";

@Module({
  imports: [],
  controllers: [AuditLogsControllers],
  providers: [AuditLogsService],
  exports: []
})


export class AuditLogsModule {}