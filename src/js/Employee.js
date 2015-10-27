import Person from './Person';


export default class Employee extends Person {
  constructor(first, last, age, job, salary) {
    super(first, last, age);
    this.job = job;
    this.bonus = 0;
    this.salary = salary;
  }

  addBonus(bonus) {
    this.bonus = bonus;
  }

  totalCalary() {
    return this.salary + this.salary * this.bonus;
  }
}
