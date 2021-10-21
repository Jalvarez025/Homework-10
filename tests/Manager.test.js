const Manager = require('../lib/Manager');

describe('Manager class', () => {
    describe('getRole method', () => {
        it('returns manager as role', () => {
            let role = 'Manager';

            const manager = new Manager('Jesse','jalvarez025@me.com', 1234, 1500)

            expect(manager.getRole()).toEqual(role);
        });
    });
});