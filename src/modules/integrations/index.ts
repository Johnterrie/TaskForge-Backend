import { Module } from "@nestjs/common";
import { IntegrationController } from "./controllers";
import { IntegrationService } from "./services";

@Module({
  imports: [],
  controllers: [IntegrationController],
  providers: [IntegrationService],
  exports: []
})


export class IntegrationModule {}