import { IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto {
  @IsNotEmpty({ message: 'Todo field must not be empty' })
  @IsString()
  todo: string;
}
