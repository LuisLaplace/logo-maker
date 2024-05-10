# 10 Object-oriented Programming: SVG Logo Maker

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Deploy Application
Using the Terminal:
```
npm i
```
After all the packages have been installed use:
```
node index.js
```

For testing purposes use:
```
npm test
```


## Description
This application is used to make a logo with that contains three-letters and a shape(circle, triangle, and square) which you can color to your preferences using simple colors or a hex color codes.


## Code
Created a file named "shapes.js" which contains codes for three classes Circle, Square, and Triangle.  Sample:
```
class Circle {
    constructor(color) {
        this.color = color;
    }

    draw(text, textColor) {
        return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="50" fill="${this.color}" />
                <text x="150" y="120" font-size="20px" fill="${textColor}" text-anchor="middle">${text}</text>
            </svg>`;
    }
}
```
- using google.com to reference dimensions for shapes but adhereing to the 300x200 pixel requirment.

making sure to export it so that we can use it in the svg.js file

In the svg.js file we used imported the shapes.js.  Created prompts to help user in filling out the required information. Sample:
```
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
```
- created with the help of chatGPT.com
The code is then exported so that it can be used in the index.js file and will generate and overwrite the logo.svg file, which will now have the new logo.


## Links

https://github.com/LuisLaplace/logo-maker

