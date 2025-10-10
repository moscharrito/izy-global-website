/**
 * Theme Configuration
 * Theme utilities and configuration for the design system
 */

import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS, SHADOWS } from './design-system';

export interface Theme {
  name: string;
  colors: typeof COLORS;
  typography: typeof TYPOGRAPHY;
  spacing: typeof SPACING;
  borderRadius: typeof BORDER_RADIUS;
  shadows: typeof SHADOWS;
}

export const defaultTheme: Theme = {
  name: 'default',
  colors: COLORS,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  shadows: SHADOWS,
};

// CSS Custom Properties Generator
export const generateCSSVariables = (theme: Theme) => {
  const cssVars: Record<string, string> = {};
  
  // Generate color variables
  Object.entries(theme.colors).forEach(([colorName, colorValue]) => {
    if (typeof colorValue === 'string') {
      cssVars[`--color-${colorName}`] = colorValue;
    } else if (typeof colorValue === 'object') {
      Object.entries(colorValue).forEach(([shade, value]) => {
        cssVars[`--color-${colorName}-${shade}`] = value;
      });
    }
  });
  
  // Generate spacing variables
  Object.entries(theme.spacing).forEach(([size, value]) => {
    cssVars[`--spacing-${size}`] = value;
  });
  
  // Generate typography variables
  Object.entries(theme.typography.fonts).forEach(([name, value]) => {
    cssVars[`--font-${name}`] = value;
  });
  
  Object.entries(theme.typography.sizes).forEach(([size, value]) => {
    cssVars[`--text-${size}`] = value;
  });
  
  // Generate border radius variables
  Object.entries(theme.borderRadius).forEach(([size, value]) => {
    cssVars[`--radius-${size}`] = value;
  });
  
  // Generate shadow variables
  Object.entries(theme.shadows).forEach(([size, value]) => {
    cssVars[`--shadow-${size}`] = value;
  });
  
  return cssVars;
};

// Utility function to apply theme
export const applyTheme = (theme: Theme) => {
  const cssVars = generateCSSVariables(theme);
  const root = document.documentElement;
  
  Object.entries(cssVars).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
};

// Theme context for React components
export const ThemeContext = {
  theme: defaultTheme,
  setTheme: (theme: Theme) => {
    applyTheme(theme);
  },
};

// Responsive breakpoint utilities
export const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

export const useMediaQuery = (query: string): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(query).matches;
};

// Component variant utilities
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'accent';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type CardVariant = 'default' | 'elevated' | 'outlined';

export const getButtonClasses = (variant: ButtonVariant, size: ButtonSize = 'md') => {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    accent: 'btn-accent',
  };
  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  };
  
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`.trim();
};

export const getCardClasses = (variant: CardVariant = 'default', hover: boolean = false) => {
  const baseClasses = 'card';
  const variantClasses = {
    default: '',
    elevated: 'card-elevated',
    outlined: 'border-2',
  };
  const hoverClasses = hover ? 'card-hover' : '';
  
  return [baseClasses, variantClasses[variant], hoverClasses]
    .filter(Boolean)
    .join(' ');
};