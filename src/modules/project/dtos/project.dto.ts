import { Expose } from "@nestjs/class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class ProjectDtos {
  @IsNotEmpty()
  @IsNumber()
  @Expose()
  readonly id: number;

  @IsNotEmpty()
  @IsString()
  @Expose()
  project: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  readonly members: string
}