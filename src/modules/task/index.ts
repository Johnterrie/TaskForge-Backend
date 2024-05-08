import { Module } from "@nestjs/common";
import { TaskController } from "./controllers";
import { TaskServices } from "./services";

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskServices],
  exports: []
})


export class TaskModule {}