import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todo) private readonly todoRepo: Repository<Todo>) {}

  async getAllTodos() {
    return await this.todoRepo.find();
  }

  async getTodoById(id: number) {
    const result = await this.todoRepo.findOne({ where: { id }});
    if (!result) {
      throw new NotFoundException(`Todo with id ${id} not found.`);
    }

    return result;
  }

  async addTodo(createTodoDto: CreateTodoDto) {
    const todo = this.todoRepo.create(createTodoDto);
    return await this.todoRepo.save(todo);
  }

  async updateTodo(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoRepo.findOne({ where: { id } });
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found.`);
    }
    Object.assign(todo, updateTodoDto);
    return await this.todoRepo.save(todo);
  }

  async deleteTodo(id: number) {
    const result = await this.todoRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Todo with id ${id} not found.`);
    }
    return { message: 'Successfully deleted' };
  }
}
