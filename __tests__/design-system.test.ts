/**
 * Design System Tests
 * Tests for design system constants, utilities, and theme configuration
 */

import {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  BORDER_RADIUS,
  SHADOWS,
  getColor,
  getSpacing,
  getTypography,
} from '@/lib/design-system';

import {
  defaultTheme,
  generateCSSVariables,
  getButtonClasses,
  getCardClasses,
} from '@/lib/theme';

describe('Design System', () => {
  describe('Colors', () => {
    it('should have all brand colors defined', () => {
      expect(COLORS.primary.navy).toBe('#1e3a5f');
      expect(COLORS.secondary.red).toBe('#c41230');
      expect(COLORS.accent.gold).toBe('#ffc107');
      expect(COLORS.neutral.gray).toBe('#6c757d');
    });

    it('should have color scales for primary colors', () => {
      expect(COLORS.primary[50]).toBeDefined();
      expect(COLORS.primary[900]).toBe('#1e3a5f');
      expect(COLORS.secondary[700]).toBe('#c41230');
      expect(COLORS.accent[400]).toBe('#ffc107');
    });

    it('should have semantic colors', () => {
      expect(COLORS.success).toBe('#28a745');
      expect(COLORS.warning).toBe('#ffc107');
      expect(COLORS.error).toBe('#dc3545');
      expect(COLORS.info).toBe('#17a2b8');
    });

    it('should have background colors', () => {
      expect(COLORS.background.white).toBe('#ffffff');
      expect(COLORS.background.light).toBe('#f8f9fa');
      expect(COLORS.background.dark).toBe('#212529');
    });
  });

  describe('Typography', () => {
    it('should have font families defined', () => {
      expect(TYPOGRAPHY.fonts.primary).toContain('Montserrat');
      expect(TYPOGRAPHY.fonts.secondary).toContain('Open Sans');
    });

    it('should have font sizes defined', () => {
      expect(TYPOGRAPHY.sizes.xs).toBe('0.75rem');
      expect(TYPOGRAPHY.sizes.base).toBe('1rem');
      expect(TYPOGRAPHY.sizes['5xl']).toBe('3rem');
    });

    it('should have font weights defined', () => {
      expect(TYPOGRAPHY.weights.normal).toBe(400);
      expect(TYPOGRAPHY.weights.semibold).toBe(600);
      expect(TYPOGRAPHY.weights.bold).toBe(700);
    });

    it('should have line heights defined', () => {
      expect(TYPOGRAPHY.lineHeights.tight).toBe(1.2);
      expect(TYPOGRAPHY.lineHeights.normal).toBe(1.6);
      expect(TYPOGRAPHY.lineHeights.relaxed).toBe(1.8);
    });
  });

  describe('Spacing', () => {
    it('should have spacing scale based on 8px system', () => {
      expect(SPACING.xs).toBe('0.5rem'); // 8px
      expect(SPACING.sm).toBe('1rem');   // 16px
      expect(SPACING.md).toBe('1.5rem'); // 24px
      expect(SPACING.lg).toBe('2rem');   // 32px
      expect(SPACING.xl).toBe('3rem');   // 48px
    });
  });

  describe('Border Radius', () => {
    it('should have border radius values', () => {
      expect(BORDER_RADIUS.sm).toBe('0.375rem');
      expect(BORDER_RADIUS.md).toBe('0.5rem');
      expect(BORDER_RADIUS.lg).toBe('0.75rem');
      expect(BORDER_RADIUS.full).toBe('9999px');
    });
  });

  describe('Shadows', () => {
    it('should have shadow definitions', () => {
      expect(SHADOWS.sm).toContain('rgb(0 0 0 / 0.05)');
      expect(SHADOWS.md).toContain('rgb(0 0 0 / 0.1)');
      expect(SHADOWS.lg).toContain('rgb(0 0 0 / 0.1)');
    });
  });

  describe('Utility Functions', () => {
    it('should get color by path', () => {
      expect(getColor('primary.navy')).toBe('#1e3a5f');
      expect(getColor('secondary.red')).toBe('#c41230');
      expect(getColor('accent.gold')).toBe('#ffc107');
      expect(getColor('invalid.path')).toBeNull();
    });

    it('should get spacing values', () => {
      expect(getSpacing('xs')).toBe('0.5rem');
      expect(getSpacing('lg')).toBe('2rem');
      expect(getSpacing('4xl')).toBe('6rem');
    });

    it('should get typography values', () => {
      expect(getTypography('sizes', 'base')).toBe('1rem');
      expect(getTypography('weights', 'bold')).toBe(700);
    });
  });
});

describe('Theme Configuration', () => {
  describe('Default Theme', () => {
    it('should have default theme defined', () => {
      expect(defaultTheme.name).toBe('default');
      expect(defaultTheme.colors).toBe(COLORS);
      expect(defaultTheme.typography).toBe(TYPOGRAPHY);
    });
  });

  describe('CSS Variables Generation', () => {
    it('should generate CSS variables from theme', () => {
      const cssVars = generateCSSVariables(defaultTheme);
      
      expect(cssVars['--color-primary-navy']).toBe('#1e3a5f');
      expect(cssVars['--color-secondary-red']).toBe('#c41230');
      expect(cssVars['--spacing-xs']).toBe('0.5rem');
      expect(cssVars['--font-primary']).toContain('Montserrat');
    });

    it('should generate variables for color scales', () => {
      const cssVars = generateCSSVariables(defaultTheme);
      
      expect(cssVars['--color-primary-50']).toBeDefined();
      expect(cssVars['--color-primary-900']).toBe('#1e3a5f');
      expect(cssVars['--color-secondary-700']).toBe('#c41230');
    });
  });

  describe('Component Utilities', () => {
    it('should generate button classes', () => {
      expect(getButtonClasses('primary')).toBe('btn btn-primary');
      expect(getButtonClasses('secondary', 'lg')).toBe('btn btn-secondary btn-lg');
      expect(getButtonClasses('outline', 'sm')).toBe('btn btn-outline btn-sm');
    });

    it('should generate card classes', () => {
      expect(getCardClasses()).toBe('card');
      expect(getCardClasses('elevated')).toBe('card card-elevated');
      expect(getCardClasses('default', true)).toBe('card card-hover');
      expect(getCardClasses('outlined', true)).toBe('card border-2 card-hover');
    });
  });
});

describe('Design System Integration', () => {
  it('should have consistent color naming', () => {
    // Primary color should be consistent across different contexts
    expect(COLORS.primary.navy).toBe('#1e3a5f');
    expect(COLORS.primary[900]).toBe('#1e3a5f');
  });

  it('should have accessible color contrasts', () => {
    // These are basic checks - in a real project you'd use a contrast checking library
    expect(COLORS.primary.navy).not.toBe(COLORS.background.white);
    expect(COLORS.secondary.red).not.toBe(COLORS.background.white);
  });

  it('should have consistent spacing system', () => {
    // Spacing should follow 8px grid system
    const spacingValues = Object.values(SPACING);
    spacingValues.forEach(value => {
      const pxValue = parseFloat(value) * 16; // Convert rem to px
      expect(pxValue % 8).toBe(0); // Should be divisible by 8
    });
  });
});