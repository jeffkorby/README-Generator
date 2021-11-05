// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for your project'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your E-mail?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage info'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter any contributions here'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide testing instructions',
        default: 'npm run test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a liscense for your application:',
        choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'GNU AGPLv3.0', 'GNU GPLv2.0', 'GNU GPLv3.0', 'MIT', 'Mozilla Public 2.0']
    }
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    try {
        const data = await inquirer.prompt(questions);
        writeToFile('./dist/README.md', generateMarkdown(data));
    } catch (err) {
        console.log(err);
    }

}

// Function call to initialize app
init();
