const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const { Circle, Square, Triangle } = require("./lib/shapes");
const { LogoText, SVG } = require("./lib/svg");

const questions = [
  {
    type: "list",
    name: "shape",
    message: "Choose a shape for your logo:",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "What colour would you like the logo?",
  },
  {
    type: "input",
    name: "text",
    message: "What 3 letters would you like on the logo?",
  },
  {
    type: "input",
    name: "textColor",
    message: "What colour would you like the text for your logo?",
  },
];

inquirer.prompt(questions).then((responses) => {
  if (responses.shape === "circle") {
      var shape = new Circle(responses.shapeColor);
      
  }
  else if (responses.shape=== "triangle"){
     var shape = new Triangle(responses.shapeColor)
  }
    else{var shape = new Square(responses.shapeColor)} 
  var text = new LogoText(responses.text, responses.textColor);
  var svg = new SVG(shape, text);

  fs.writeFileSync(path.join(process.cwd(), "template.svg"), svg.render());
});
