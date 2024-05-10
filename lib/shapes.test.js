// Triangle.test.js
const Triangle = require('./Triangle');

describe('Triangle', () => {
  let shape;

  beforeEach(() => {
    shape = new Triangle();
  });

  test('setColor sets the color of the triangle', () => {
    shape.setColor('blue');
    expect(shape.color).toBe('blue');
  });

  test('render renders the triangle with the given color', () => {
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test('render renders the triangle without color if color is not set', () => {
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182"  />');
  });
});
