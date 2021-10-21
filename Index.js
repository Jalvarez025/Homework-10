const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const askQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Employee name?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee email?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee id?',
        },
        {
            type: 'input',
            name: 'role',
            message: 'Employee role?',
        },
        // {
        //     type: 'input',
        //     name: 'license',
        //     message: 'What kind of license did you use?',
        // },
        // {
        //     type: 'input',
        //     name: 'command',
        //     message: 'What command should be run to install dependencies?',
        // },
        // {
        //     type: 'input',
        //     name: 'tests',
        //     message: 'What command should be run to run tests?',
        // },
        // {
        //     type: 'input',
        //     name: 'info',
        //     message: 'What does the user need to know about using the repo?',
        // },
        // {
        //     type: 'input',
        //     name: 'contributing',
        //     message: 'What does the user need to know about contributing to the repo?',
        // }
    ]);
}

function generateHtml(data) {
   // if(data.role == 'Engineer'){

   // }

    return `
    <html>
<head>
    <title>Employee Registration</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
</head>
<header>
<h1 class="text-white d-flex justify-content-center align-items-center" style="background-color:red; height:175px">My Team</h1>
</header>


</html>
    ${data.name}
    ${data.email}
    ${data.id}`;

}

function init() {
    //writeToFile()
    askQuestions()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('index.html', generateHtml(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));

};


// Function call to initialize app
init();
