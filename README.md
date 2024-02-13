# Module Challenge – Team Profile Generator
## Description
This project is to quickly and easily create a Team Profile page by using a command-line application. 

To produce this page, the Inquirer package is used for user’s input, and an HTML template with Bootstrap components is prepared.

The most difficult part this time is to connect all the prompts together. In the beginning, the manager prompt and another prompt clashed and it took me a while to figure out how to use the ‘then()’ method with Switch cases. 

And then an easy mistake I made was not observing the error in terminal carefully – when the error said the ‘manager.getOfficeNumber’ cannot be found, I didn’t notice that this method wasn’t defined in the ‘manager’ script, because the instructions didn’t indicate adding this method. I should learn to observe the code and its errors instead just sticking to the README requirements.


Link to the repository:

https://github.com/leesoohang/module12-team-profile-generator.git

Link to the HTML stored in the ‘output’ folder within the repository:

https://github.com/leesoohang/module12-team-profile-generator/blob/0814cfb06dd02a78ef64c9e6c5ac767a252fb3f2/output/team.html


## Installation
1. Node.js is required to initialize the program
2. Inquirer package (npm install inquirer) 
3. Jest package for testing (npm install jest)

## Usage
The sample HTML file generated using the application is named ‘page.html’ in the ‘output’ folder. 

To test the program, please type 'node index.js' in your terminal.

Screenshot of passed test:

![pass](/images/screenshot-test-pass.png)

Screenshot of user input of team member information:

![command-line](/images/screenshot-command-line.png)

Screenshot of sample generated team profile page:

![page](/images/screenshot-team-page.png)

## Credits
Inquirer package documentation:

https://www.npmjs.com/package/inquirer

Inquirer.js examples in GitHub:

https://github.com/SBoudrias/Inquirer.js/tree/master


