

class Employee {
    constructor(name, email, id) {
      this.id = id;
      this.name = name;
      this.email = email;
    }

    getName(data){
        return data.name;
    }
    getId(data){
        return data.id;
    }
    getEmail(data){
        return data.email;
    }
  
    // printInfo() {
    //   console.log(`This employee's name is ${this.name}`);
    //   console.log(`This employee's has the id ${this.id}`);
    //   console.log(`This employee's email is ${this.email}`);
    // }
  }
  module.exports = Employee;