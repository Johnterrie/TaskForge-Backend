import { Module } from "@nestjs/common";
import { AuthController } from "./controllers";
import { AuthServices } from "./services/auth.service";

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthServices],
  exports: []
})


export class AuthModule {}