const readline = require('readline');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

function createLogo() {
    return new Promise(async (resolve, reject) => {
        try {
            const text = await prompt("Enter up to three characters: ").then(answer => answer.substring(0, 3));
            const textColor = await prompt("Enter text color (keyword or hexadecimal number): ");
            const shapeType = await prompt("Choose a shape (circle, triangle, square): ");
            const shapeColor = await prompt("Enter shape color (keyword or hexadecimal number): ");

            let shape;
            switch (shapeType.toLowerCase()) {
                case 'circle':
                    shape = new Circle(shapeColor);
                    break;
                case 'triangle':
                    shape = new Triangle(shapeColor);
                    break;
                case 'square':
                    shape = new Square(shapeColor);
                    break;
                default:
                    throw new Error('Invalid shape type');
            }

            const svgContent = shape.draw(text, textColor);
            fs.writeFileSync('logo.svg', svgContent);
            resolve();
        } catch (err) {
            reject(err);
        } finally {
            rl.close();
        }
    });
}

module.exports = { createLogo };
