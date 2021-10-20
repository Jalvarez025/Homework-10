const Employee = require('../lib/Employee');

describe('Employee class', () => {
    describe('getName method', () => {
        it('returns employee name', () => {
            let name = 'Jesse';

            const employee = new Employee(name, 'jalvarez025@me.com', 1234)

            expect(employee.getName()).toEqual(name);
        });
    });

    describe('getEmail method', () => {
        it('returns employee email', () => {
            let email = 'jalvarez025@me.com';

            const employee = new Employee('Jesse', email, 1234)

            expect(employee.getEmail()).toEqual(email);
        });
    });

    describe('getId method', () => {
        it('returns employee Id', () => {
            let id = 1234;

            const employee = new Employee('Jesse', 'jalvarez025@me.com', id)

            expect(employee.getId()).toEqual(id);
        });
    });

    describe('getRole method', () => {
        it('returns employee role', () => {
            let role = 'Employee';

            const employee = new Employee('Jesse', 'jalvarez025@me.com', 1234)

            expect(employee.getRole()).toEqual(role);
        });
    });
});
