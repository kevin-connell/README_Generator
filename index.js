const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user
inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of your project",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license would you like?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "no"],
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?",
        default: function () {
            return "npm i";
        },
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: function () {
            return "npm test";
        },
    },
    {
        type: "input",
        name: "use",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "contribution",
        message: "What does the user need to know about contributing the repo?",
    },
    {
        type: "confirm",
        name: "credits",
        message: "Did you work on this with collaborators?",
    },
    {
        type: "input",
        name: "collaborators",
        message: "What is your collaborator's name?",
        when: function (answers) {
            return answers.credits;
        },
    },
    {
        type: "input",
        name: "collabGit",
        message: "What is your collaborator's GitHub username?",
        when: function (answers) {
            return answers.credits;
        },
    },
])
    .then(function (answer) {
        let generatedM = generateMarkdown(answer);
        console.log(answer)

        fs.writeFile("generatedREADME.md", generatedM, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
    });

// function collabFunc() {

//     let temp = "hello"
//     let nextQ = false

//     inquirer.prompt([
//             {
//                 type: "input",
//                 name: "colab",
//                 message: "What is their name?",
//             },
//             {
//                 type: "input",
//                 name: "colabGitHub",
//                 message: "What is their GitHub username?",
//             },
//             {
//                 type: "confirm",
//                 name: "next",
//                 message: "Do you have another collaborator?",
//             },
//         ])
//         .then(function (smallAnswer) {
//             temp = temp + "\n" + smallAnswer.colab + "   @ [" + smallAnswer.colabGitHub + "](https://github.com/" + smallAnswer.colabGitHub + ")"

//             nextQ = smallAnswer.next
//         });

//     return temp
// }

// function to initialize program
function init() {

}

// function call to initialize program
init();
