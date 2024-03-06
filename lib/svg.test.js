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