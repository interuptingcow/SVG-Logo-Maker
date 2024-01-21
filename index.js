const fs = require('fs');
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
let genSVGImg = "";

inquirer
    .prompt([
        {
            type: 'maxlength-input',
            name: 'text',
            message: 'what 3 letters would you like in your image?',
            maxLength: 3
        
        },       
        {
            type: 'list',
            name: 'textColor',
            message: 'What color would you like your text to be?',
            choices: ['Red', 'Blue', 'Green'],
            default: 'Red'
        },
        {   
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your image to be?',
            choices: ['Square', 'Triangle', 'Circle'],
            default: 'Square'
        },
        {
            type: 'list',
            name: 'shapeColor',
            message: 'What color would you like your shape to be?',
            choices: ['Red', 'Blue', 'Green'],
            default: 'Red'
        },

    ])

    .then((answers) => { 

        switch(answers.shape) {
            case "Square":
                genSVGImg = generateSquareSVG(answers);
                break;
            case "Triangle":
                genSVGImg = generateTriSVG(answers);
                break;
            case "Circle":
                genSVGImg = generateCirSVG(answers);
                break;
        }

        fs.writeFile('SVGImage.svg', genSVGImg, (err) =>
        err ? console.log(err) : console.log('Successfully created SVGImage.svg!'))
    });



    

    const generateSquareSVG = ({text, textColor, shapeColor}) =>{
        return `<svg version="1.1" viewBox = "0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g>
                <rect x="0" y="0" width="50" height="50" fill="${shapeColor}"/>
                <text x="14" y="27" font-family="Verdana" font-size="12" fill="${textColor}">${text}</text>
            </g>
        </svg>`
    };

    const generateTriSVG = ({text, textColor, shapeColor}) =>{
        return `<svg version="1.1" viewBox = "0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g>
                <polygon points= "5,45 45,45 25,5" fill="${shapeColor}"/>
                <text x="16" y="35" font-family="Verdana" font-size="10" fill="${textColor}">${text}</text>
            </g>
        </svg>`
    };

    const generateCirSVG = ({text, textColor, shapeColor}) =>{
        return `<svg version="1.1" viewBox = "0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g>
                <circle cx="25" cy="25" r="25" fill="${shapeColor}"/>
                <text x="7" y="31" font-family="Verdana" font-size="20" fill="${textColor}">${text}</text>
            </g>
        </svg>`
    };