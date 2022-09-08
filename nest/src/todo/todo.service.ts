import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
    private userService: UserService,
  ) {}

  async create(createTodoDto: CreateTodoDto, userId: number) {
    const todo: Todo = new Todo();
    todo.title = createTodoDto.title;
    todo.Date = new Date().toDateString();
    todo.Completed = false;
    todo.user = await this.userService.findOne(userId);
    return this.todoRepository.save(todo);
  }

  findAllTodoByUserNotCompleted(userId: number) {
    return this.todoRepository.find({
      relations: ['user'],
      where: { user: { id: userId }, Completed: false },
    });
  }

  findAllTodoByUserCompleted(userId: number) {
    return this.todoRepository.find({
      relations: ['user'],
      where: { user: { id: userId }, Completed: true },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} todo`;
  // }

  update(todoId: number) {
    return this.todoRepository.update(todoId, { Completed: true });
  }

  remove(todoId: number) {
    return this.todoRepository.delete(todoId);
  }
}
