import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import { TaskModule } from './task/task.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    EmployeeModule,
    TaskModule,
    DatabaseModule
  ],
})
export class AppModule {}

