
export default class Department {
  constructor(name) {
    this.name = name
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  employeesList() {
    return this.employees;
  }
}
