import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  getAllTodos() {
    return [{ message: 'OK' }];
  }

  getTodoById(id: number) {
    return { message: 'This is a specific todo of id = ' + id };
  }

  addTodo() {
    return { message: 'You have added a todo' };
  }

  updateTodo() {
    return { message: 'You have updated a todo' };
  }

  deleteTodo() {
    return { message: 'You have deleted a todo' };
  }
}
