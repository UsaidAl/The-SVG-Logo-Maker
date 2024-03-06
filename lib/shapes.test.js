const { Circle, Square, Triangle } = require("../lib/shapes")

describe('Circle', () => {
    it('should render a circle SVG', () => {
        const circle =new Circle('#FF0000');
        const svg = circle.render();
        expect(svg).toContain('<circle');
        expect(svg).toContain('fill="#FF0000"');
    });
});

describe('Square', () => {
    it('should render a square SVG', () => {
      const square = new Square('#00FF00');
      const svg = square.render();
      expect(svg).toContain('<rect');
      expect(svg).toContain('fill="#00FF00"');
    });
  });