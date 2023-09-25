const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");

questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Pick a shape for your logo',
        choices:['Square', 'Triangle','Circle'] 
    },
    {
        type: 'input',
        name:'shapeColor', 
        message:"Pick a shape color using either hexicode or name of color",
    },
    {
        type: "input",
        name: 'text',
        message:'Enter the text you would like rendered on your image'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Pick a color for your text using either hexicode or name of a color'
    }
];


//  function to write SVG file
const writeSVG = ({shape, shapeColor, text, textColor}) =>

`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg> `;

    // inquirer method to implement user input
    inquirer.prompt(questions)
    .then((answers) => {
        const pageContent = generateReadMe(answers);

        fs.writeFile('README.md', pageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });