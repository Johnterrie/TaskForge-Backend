import { Module } from "@nestjs/common";
import { NotificationController } from "./controllers";
import { NotificationService } from "./services";

@Module({
  imports: [],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: []
})


export class NotificationModule {}