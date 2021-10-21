//const index = require("../index");

class Employee {
    constructor(name, email, id) {
      this.id = id;
      this.name = name;
      this.email = email;
    }

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
      const role = 'Employee';
      this.role = role;
      return this.role;
    }
  
    // printInfo() {
    //   console.log(`This employee's name is ${this.name}`);
    //   console.log(`This employee's has the id ${this.id}`);
    //   console.log(`This employee's email is ${this.email}`);
    // }
  }
  module.exports = Employee;