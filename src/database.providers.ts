import { createConnection } from 'typeorm';
import { Employee } from './employee/employee.entity';
import { Task } from './task/task.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'nestjs',
      entities: [Employee, Task],
      synchronize: true,
    }),
  },
];
