// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMd = require('./utils/generateMarkdown.js');

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
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log("Successfully wrote to file."));
}

// TODO: Create a function to initialize app
function init() {
  console.log("Welcome to the professional README generator. Answer the following questions to create your README file.\n");

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
        choices: [
          'Apache 2.0 License',
          'Boost Software License 1.0',
          'BSD 3-Clause License',
          'BSD 2-Clause License',
          'CC0',
          'Attribution 4.0 International',
          'Attribution-ShareAlike 4.0 International',
          'Attribution-NonCommercial 4.0 International',
          'Attribution-NoDerivates 4.0 International',
          'Attribution-NonCommmercial-ShareAlike 4.0 International',
          'Attribution-NonCommercial-NoDerivatives 4.0 International',
          'Eclipse Public License 1.0',
          'GNU GPL v3',
          'GNU GPL v2',
          'GNU AGPL v3',
          'GNU LGPL v3',
          'GNU FDL v1.3',
          'Hippocratic License 2.1',
          'Hippocratic License 3.0',
          'IBM Public License Version 1.0',
          'ISC License (ISC)',
          'MIT',
          'Mozilla Public License 2.0',
          'Attribution License (BY)',
          'Open Database License (ODbL)',
          'Public Domain Dedication and License (PDDL)',
          'Perl License',
          'Artistic License 2.0',
          'SIL Open Font License 1.1',
          'Unlicense',
          'zlib/libpng License'
        ]
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
    .then((response) => {
      // console.log(response)  // test

      // Generate README file based on provided info here
      const fileInfo = genMd.generateMarkdown(response)
      writeToFile('./dist/README.md', fileInfo)
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
