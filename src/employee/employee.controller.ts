import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

@Controller('employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get()
  getAllEmployees(): Promise<Employee[]> {
    return this.employeeService.getAllEmployees();
  }

  @Get(':id')
  getEmployeeById(@Param('id') id: number): Promise<Employee> {
    return this.employeeService.getEmployeeById(id);
  }

  @Post()
  createEmployee(@Body() employee: Employee): Promise<Employee> {
    return this.employeeService.createEmployee(employee);
  }

  @Put(':id')
  updateEmployee(@Param('id') id: number, @Body() employee: Employee): Promise<Employee> {
    return this.employeeService.updateEmployee(id, employee);
  }

  @Delete(':id')
  deleteEmployee(@Param('id') id: number): Promise<void> {
    return this.employeeService.deleteEmployee(id);
  }
}
