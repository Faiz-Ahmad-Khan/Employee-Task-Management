import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async getTaskById(id: number): Promise<Task> {
    return this.taskRepository.findOne({ where: { id } });
  }

  async createTask(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }

  async updateTask(id: number, task: Task): Promise<Task> {
    await this.taskRepository.update(id, task);
    return this.taskRepository.findOne({ where: { id } });
  }

  async deleteTask(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
