import { IsNotEmpty, IsString } from "class-validator";

// DTO defines the shape of the data to be sent to the service
// As such it can be used to validate the shape of any input data
// in requests to the endpoint
export class CreateTodoDto {
  @IsNotEmpty({ message: 'Todo field must not be empty' })
  @IsString()
  todo: string;
}
