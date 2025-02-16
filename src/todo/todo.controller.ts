import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private authService: TodoService) {}

  @Get()
  getAuth() {
    return this.authService.getAllTodos();
  }
}
