const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Set up an array to collect team member info
const teamArray = [];

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
		type: "input",
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
  
];

// prompts to trigger questions when adding a new member

function promptManager() {
  inquirer.prompt(manager)
  .then((data) => {
      const addManager = new Manager(data.name, data.id, data.email, data.officeNumber);
      teamArray.push(addManager);
      addMember();
      });
}

function promptEngineer() {
  inquirer.prompt(engineer)
  .then((data) => {
      const addEngineer = new Engineer(data.name, data.id, data.email, data.github);
      teamArray.push(addEngineer);
      addMember();
    })
}

function promptIntern() {
  inquirer.prompt(intern)
    .then((data) => {
      const addIntern = new Intern(data.name, data.id, data.email, data.school);
      teamArray.push(addIntern);
      addMember();
    })
}

// prompt to add member after completing manager info

function addMember() {
inquirer.prompt({
		name: "add",
		type: "list",
		message: "Choose a member you want to add: ",
		choices: [
			"Engineer",
			"Intern",
			"I don't want to add any more members.",
		],
	})
  .then((answers) => {
      
      switch (answers.add) {
        case "Engineer":
          promptEngineer();
          break;
        case "Intern":
          promptIntern();
          break;
        case "I don't want to add any more members.":
          generateHTML();
          break;
      }
    });
}


function generateHTML() {
  if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
  fs.writeFile(outputPath, render(teamArray), (err) => {
    err? console.error(err) : console.log(`Team Profile page generated! File location: ${outputPath}`)    
  }) 
}

// initialize the program by asking manager info first
promptManager();

