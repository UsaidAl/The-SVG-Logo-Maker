const inquirer = require('inquirer');
const {Circle, Square, Triangle } = require("./lib/shapes")
const {writeFile} = require("fs/promises")
const {LogoText, SVG} = require("./lib/svg")

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What colour would you like the logo?',
    },
    {
        type: 'input',
        name: 'text',
        message: 'What 3 letters would you like on the logo?',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What colour would you like the text for your logo?',
    },
];
