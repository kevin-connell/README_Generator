// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide a description of your project",
    },
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license would you like?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'intall',
        message: "What command should be run to install dependencies?",
        default: function () {
            return 'npm i';
        },
    },
    {
        type: 'input',
        name: 'test',
        message: "What command should be run to run tests?",
        default: function () {
            return 'npm test';
        },
    },
    {
        type: 'input',
        name: 'use',
        message: "What does the user need to know about using the repo?",
    },
    {
        type: 'input',
        name: 'contribution',
        message: "What does the user need to know about contributing the repo?",
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
