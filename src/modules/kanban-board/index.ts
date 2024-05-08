import { Module } from "@nestjs/common";
import { KanbanController } from "./controllers";
import { KanbanServices } from "./services";

@Module({
  imports: [],
  controllers: [KanbanController],
  providers: [KanbanServices],
  exports: []
})


export class KanbanModule {}