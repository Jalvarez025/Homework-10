const index = require("./index");

class Employee {
    constructor(name, email, id) {
      this.id = id;
      this.name = name;
      this.email = email;
    }

    getName(data){
        new Employee.name = data.name;
        console.log('Employee name: ' + Employee.name)
        return Employee.name;
    }
    // getId(data){
    //     new Employee.id = data.id;
    //     return Employee.id;
    // }
    // getEmail(data){
    //     new Employee.email = data.email;
    //     return Employee.email;
    // }
  
    // printInfo() {
    //   console.log(`This employee's name is ${this.name}`);
    //   console.log(`This employee's has the id ${this.id}`);
    //   console.log(`This employee's email is ${this.email}`);
    // }
  }
  module.exports = Employee;