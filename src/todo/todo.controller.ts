import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private authService: TodoService) {}

  @Get()
  getTodos() {
    return this.authService.getAllTodos();
  }

  @Get(':id')
  getTodo(@Param('id', ParseIntPipe) id: number) {
    return this.authService.getTodoById(id);
  }
}
