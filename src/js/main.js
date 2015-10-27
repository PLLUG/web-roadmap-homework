import Employee from './Employee';
import Department from './Department';


const department = new Department(name="Pllug");
const employee = new Employee("First", "Last", 32, "Developer", 1000);
employee.addBonus(0.1);

department.addEmployee(employee);

for (let employee of department.employeesList()) {
  console.log(`${employee.first} | ${employee.last} | ${employee.job} | ${employee.totalCalary()}$`);
}
