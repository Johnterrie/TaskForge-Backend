import { Module } from "@nestjs/common";
import { TimeTrackingController } from "./controllers";
import { TimeTrackingServices } from "./services";


@Module({
  imports: [],
  controllers: [TimeTrackingController],
  providers: [TimeTrackingServices],
  exports: []
})


export class TimeTrackingModule {}