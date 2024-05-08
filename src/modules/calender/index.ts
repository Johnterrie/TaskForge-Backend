import { Module } from "@nestjs/common";
import { CalenderController } from "./controllers";
import { CalenderService } from "./services";

@Module({
  imports: [],
  controllers: [CalenderController],
  providers: [CalenderService],
  exports: []
})


export class CalenderModule {}