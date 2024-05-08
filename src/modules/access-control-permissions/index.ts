import { Module } from "@nestjs/common";
import { AccessControlControllers } from "./controllers";
import { AccessControlService } from "./services/access-control.services";

@Module({
  imports: [],
  controllers: [AccessControlControllers],
  providers: [AccessControlService],
  exports: [AccessControlService],
})


export class AccessControlModule {}