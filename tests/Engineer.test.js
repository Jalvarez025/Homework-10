const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    describe('getGithub method', () => {
        it('returns github username', () => {
            let githubUser = 'Jalvarez025';

            const engineer = new Engineer('Jesse','jalvarez025@me.com', 1234, githubUser)

            expect(engineer.getGithub()).toEqual(githubUser);
        });
    });

    describe('getRole method', () => {
        it('returns engineer as role', () => {
            let role = 'Engineer';

            const engineer = new Engineer('Jesse','jalvarez025@me.com', 1234, 'Jalvarez025')

            expect(engineer.getRole()).toEqual(role);
        });
    });
});