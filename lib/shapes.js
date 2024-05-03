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

class Triangle {
    constructor(color) {
        this.color = color;
    }

    draw(text, textColor) {
        return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,50 50,150 250,150" fill="${this.color}" />
                <text x="150" y="120" font-size="20px" fill="${textColor}" text-anchor="middle">${text}</text>
            </svg>`;
    }
}

class Square {
    constructor(color) {
        this.color = color;
    }

    draw(text, textColor) {
        return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
                <text x="150" y="120" font-size="20px" fill="${textColor}" text-anchor="middle">${text}</text>
            </svg>`;
    }
}


module.exports = { Circle, Triangle, Square };
