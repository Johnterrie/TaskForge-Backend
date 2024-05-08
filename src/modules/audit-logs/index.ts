import { Module } from "@nestjs/common";
import { AuditLogsControllers } from "./Controllers";
import { AuditLogsService } from "./services";

@Module({
  imports: [],
  controllers: [AuditLogsControllers],
  exports: [],
  providers: [AuditLogsService]
})


export class AuditLogsModule {}