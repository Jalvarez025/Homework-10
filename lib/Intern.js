const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, id, school) {
      super('Jesse', 'jalvarez025@me.com', 1234, 'UT Austin');
      this.id = id;
      this.name = name;
      this.email = email;
      this.school = school;
    }
  
    getSchool(){
        return this.school;
    }

    getRole() {
        const role = 'Intern';
        this.role = role;
        return this.role;
    }
}

module.exports = Intern