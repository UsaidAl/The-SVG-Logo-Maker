const { Circle, Square, Triangle } = require("../lib/shapes")

describe('Circle', () => {
    it('should render a circle SVG', () => {
        const circle =new Circle('#FF0000');
        const svg = circle.render();
        expect(svg).toContain('<circle');
        expect(svg).toContain('fill="#FF0000"');
    });
});