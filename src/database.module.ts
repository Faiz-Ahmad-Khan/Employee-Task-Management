import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee/employee.entity';
import { Task } from './task/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'employees',
      entities: [Employee, Task],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Employee, Task]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}