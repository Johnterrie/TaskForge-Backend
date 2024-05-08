import { Module } from "@nestjs/common";
import { MiscellaneousController } from "./controllers";
import { MiscellaneousService } from "./services";

@Module({
  imports: [],
  controllers: [MiscellaneousController],
  providers: [MiscellaneousService],
  exports: []
})


export class MiscellaneousModule {}