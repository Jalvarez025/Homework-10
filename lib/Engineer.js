const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, github) {
      super('Jesse', 'jalvarez025@me.com', 1234, 'Jalvarez025');
      this.id = id;
      this.name = name;
      this.email = email;
      this.github = github;
    }
  
    getGithub(){
        return this.github;
    }

    getRole() {
        const role = 'Engineer';
        this.role = role;
        return this.role;
    }
}

module.exports = Engineer