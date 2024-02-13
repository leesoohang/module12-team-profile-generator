const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// When a user starts the application, they're prompted to enter the team manager's:Name Employee ID Email address Office number



const engineer = [
   {
    name: "name",
    type: "input",
    message: "What's the engineer's name?",
  },
  {
    name: "id",
    type: "input",
    message: "What's the engineer's ID?",
  },
  {
    name: "email",
    type: "input",
    message: "What's the engineer's email?",
  },
  {
    name: "github",
    type: "input",
    message: "What's the engineer's GitHub user?",
  },
]

const intern = [
   {
    name: "name",
    type: "input",
    message: "What's the intern's name?",
  },
  {
    name: "id",
    type: "input",
    message: "What's the intern's ID?",
  },
  {
    name: "email",
    type: "input",
    message: "What's the intern's email?",
  },
  {
    name: "school",
    type: "input",
    message: "What's the intern's school?",
  },
]

const manager = [
	{
		name: "name",
		type: "input",
		message: "What's the team manager's name?",
	},
	{
		name: "id",
		type: "number",
		message: "What's the team manager's ID?",
	},
	{
		name: "email",
		type: "input",
		message: "What's the team manager's email?",
	},
	{
		name: "officeNumber",
		type: "input",
		message: "What's the team manager's office number?",
	},
	{
		name: "next",
		type: "list",
		message: "Choose a member you want to add: ",
		choices: [
			{ name: "Engineer", value: engineer },
			{ name: "Intern", value: intern },
			"I don't want to add any more members.",
		],
	},
];



function writeToFile(outputPath, render) {
  fs.appendFile(outputPath, render, (err) => {
    err? console.error(err) : console.log("Team Profile page generated!")    
    })
}

function init() {
inquirer.prompt(manager).
then((answers) => {
  if ((answers.next) === "Engineer") {
    inquirer.prompt(engineer);
  } else if ((answers.next) === "Intern") {
    inquirer.prompt(intern);
  } else {
    process.exit();
  }
  })
}

init()