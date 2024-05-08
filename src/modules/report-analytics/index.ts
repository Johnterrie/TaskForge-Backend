import { Module } from "@nestjs/common";
import { ReportAnalysisController } from "./controllers";
import { ReportAnalysisServices } from "./services";

@Module({
  imports: [],
  controllers: [ReportAnalysisController],
  providers: [ReportAnalysisServices],
  exports: [],
})


export class ReportAnalysisModule {}