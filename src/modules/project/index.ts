import { Module } from "@nestjs/common";
import { ProjectController } from "./controllers";
import { ProjectServices } from "./services";

@Module({
  imports: [],
  controllers: [ProjectController],
  providers: [ProjectServices],
  exports: []
})


export class ProjectModule {}