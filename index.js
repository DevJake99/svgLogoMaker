const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes");

// List of questions for user input via CLI
var questions = [
    {
        type: 'input',
        name: 'textColor',
        message: 'Pick a color for your text using either hexicode or name of a color'
    },
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
    }
];


// Class with methods to configure the XML for SVG file
class generateSvg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    setTextElement(textColor,text){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    render(){

        return `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${this.shapeElement}
        ${this.textElement}
        </svg>`
    }
    
};

// Function to write data to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if (err) {
            console.log(`Error writing file: ${err}` );
        } else {
            console.log('File written successfully!');
        }
    })
};


 function init() {
    console.log('Initiating..');
    // Collect questions from questions variable using inquirer
    // .then arrow function to collect promise from "promt" method and etract user responses
    inquirer.prompt(questions)
    .then((answers) => {
        // Variable to hold user input for logo text if text is at least 1 character
        var logoEl = '';
        if (answers.text.length > 0 ) {
            logoEl = answers.text
        } else {
            console.log('Please Enter at Least One character for logo')
        } 
        // Assigning properties of SVG Logo to variables and executing confirmation messages for user
        var txtColor = answers.textColor;
        console.log(`User Succesfully Slected ${txtColor} for text color`);
        var shapeType = answers.shape; 
        if (shapeType === "Square") {
            shapeType = new Square();
            console.log(`User Succesfully Selected ${shapeType} for SVG Shape!`);
        }else if (shapeType === "Circle") {
            shapeType = new Circle();
            console.log(`User Succesfully Selected ${shapeType} for SVG Shape!`);
        }
        else if (shapeType === "Triangle") {
            shapeType = new Triangle();
            console.log(`User Succesfully Selected ${shapeType} for SVG Shape!`);
        } 
        shapeType.setShapeColor(answers.shapeColor);
        console.log(`User Succesfully selected ${answers.shapeColor} for SVG Shape color!`);
        //var userShape = answers.shape;
        var svg = new generateSvg();
        svg.setTextElement(txtColor, logoEl);
        svg.setShapeElement(shapeType);
        svgXML = svg.render();
        writeToFile('logo.svg', svgXML);
    });
};
init()

