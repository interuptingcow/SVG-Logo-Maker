const fs = require('fs');
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

const generateSVGImg = ({text, textColor, shape, shapeColor}) =>




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
        const generateSVGImage = generateSVGImage(answers);
        fs.writeFile('SVGImage.svg', generateSVGImage, (err) =>
        err ? console.log(err) : console.log('Successfully created SVGImage.svg!'))
    })