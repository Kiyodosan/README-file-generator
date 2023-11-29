// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  "What is your project title?",
  "Give a description about your project.",
  "Enter installation instructions.",
  "Enter usage information.",
  "Enter contribution guidelines.",
  "Provide test instructions.",
  "Choose a license for your project:",  // list
  "Enter your GitHub username.",
  "Enter your email address."
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  console.log("Welcome to the professional README generator. Answer the following questions to create your README file.\n\n");

  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: "title"
      },
      {
        type: "input",
        message: questions[1],
        name: "description"
      },
      {
        type: "input",
        message: questions[2],
        name: "installation"
      },
      {
        type: "input",
        message: questions[3],
        name: "usage"
      },
      {
        type: "input",
        message: questions[4],
        name: "contribution"
      },
      {
        type: "input",
        message: questions[5],
        name: "test"
      },
      {
        type: "checkbox",
        message: questions[6],
        name: "license",
        choices: ["TBD", "TBD2", "TBD3", "TBD4"]  // Insert license options here
      },
      {
        type: "input",
        message: questions[7],
        name: "username"
      },
      {
        type: "input",
        message: questions[8],
        name: "email"
      }
    ])
    .then((response) =>
      console.log(response)  // test

      // Generate README file based on provided info here

    )
    .catch((err) => console.error(err));

}

// Function call to initialize app
init();
