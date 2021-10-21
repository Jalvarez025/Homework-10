const Intern = require('../lib/Intern');

describe('Intern class', () => {
    describe('getSchool method', () => {
        it('returns school', () => {
            let school = 'UT Austin';

            const intern = new Intern('Jesse','jalvarez025@me.com', 1234, school)

            expect(intern.getSchool()).toEqual(school);
        });
    });

    describe('getRole method', () => {
        it('returns intern as role', () => {
            let role = 'Intern';

            const intern = new Intern('Jesse','jalvarez025@me.com', 1234, 'UT Austin')

            expect(intern.getRole()).toEqual(role);
        });
    });
});