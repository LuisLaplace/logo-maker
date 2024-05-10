// Triangle.js
class Triangle {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      const fillColor = this.color ? `fill="${this.color}"` : '';
      return `<polygon points="150, 18 244, 182 56, 182" ${fillColor} />`;
    }
  }
  
  module.exports = Triangle;
  