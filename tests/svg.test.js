const { LogoText, SVG } = require("../lib/svg")
const { Square } = require("../lib/shapes")

describe('LogoText', () => {
    it('should render logo text SVG', () => {
      const logotext = new LogoText('ABC', '#FF0000');
      const svg = logotext.render();
      expect(svg).toContain('<text');
      expect(svg).toContain('fill="#FF0000"');
      expect(svg).toContain('ABC');
    });
  });

  describe('SVG', () => {
    it('should render a complete SVG', () => {
      const square = new Square('#FF0000');
      const logotext = new LogoText('ABC', '#FF0000');
      const svgObj = new SVG(square, logotext);
      const svg = svgObj.render();
      expect(svg).toContain('<svg');
      expect(svg).toContain('ABC');
      expect(svg).toContain('<rect');
      expect(svg).toContain('<text');
    });
  });