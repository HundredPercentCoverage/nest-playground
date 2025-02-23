import { IsBoolean, IsString } from "class-validator";

export class UpdateTodoDto {
  @IsString()
  todo?: string;

  @IsBoolean()
  done?: boolean;
}
