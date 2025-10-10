/**
 * Design System Constants
 * Centralized design tokens and theme configuration
 */

export const COLORS = {
  // Brand Colors
  primary: {
    navy: '#1e3a5f',
    50: '#f0f4f8',
    100: '#d9e2ec',
    200: '#bcccdc',
    300: '#9fb3c8',
    400: '#829ab1',
    500: '#627d98',
    600: '#486581',
    700: '#334e68',
    800: '#243b53',
    900: '#1e3a5f',
  },
  secondary: {
    red: '#c41230',
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#c41230',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  accent: {
    gold: '#ffc107',
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#ffc107',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  neutral: {
    gray: '#6c757d',
    50: '#f8f9fa',
    100: '#e9ecef',
    200: '#dee2e6',
    300: '#ced4da',
    400: '#adb5bd',
    500: '#6c757d',
    600: '#495057',
    700: '#343a40',
    800: '#212529',
    900: '#000000',
  },
  // Semantic Colors
  success: '#28a745',
  warning: '#ffc107',
  error: '#dc3545',
  info: '#17a2b8',
  // Background Colors
  background: {
    white: '#ffffff',
    light: '#f8f9fa',
    dark: '#212529',
  },
} as const;

export const TYPOGRAPHY = {
  fonts: {
    primary: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    secondary: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
  },
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.6,
    relaxed: 1.8,
  },
} as const;

export const SPACING = {
  xs: '0.5rem',   // 8px
  sm: '1rem',     // 16px
  md: '1.5rem',   // 24px
  lg: '2rem',     // 32px
  xl: '3rem',     // 48px
  '2xl': '4rem',  // 64px
  '3xl': '5rem',  // 80px
  '4xl': '6rem',  // 96px
} as const;

export const BORDER_RADIUS = {
  sm: '0.375rem', // 6px
  md: '0.5rem',   // 8px
  lg: '0.75rem',  // 12px
  xl: '1rem',     // 16px
  full: '9999px',
} as const;

export const SHADOWS = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const TRANSITIONS = {
  fast: '0.15s ease',
  normal: '0.2s ease',
  slow: '0.3s ease',
} as const;

// Component-specific design tokens
export const BUTTON_STYLES = {
  primary: {
    background: COLORS.primary.navy,
    color: COLORS.background.white,
    hover: COLORS.primary[800],
  },
  secondary: {
    background: COLORS.secondary.red,
    color: COLORS.background.white,
    hover: COLORS.secondary[800],
  },
  outline: {
    background: 'transparent',
    color: COLORS.primary.navy,
    border: COLORS.primary.navy,
    hover: COLORS.primary.navy,
  },
} as const;

export const CARD_STYLES = {
  background: COLORS.background.white,
  border: COLORS.neutral[200],
  shadow: SHADOWS.sm,
  radius: BORDER_RADIUS.md,
  hoverShadow: SHADOWS.md,
} as const;

// Utility functions for design system
export const getColor = (path: string): string | null => {
  const keys = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = COLORS;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) return null;
  }
  
  return typeof value === 'string' ? value : null;
};

export const getSpacing = (size: keyof typeof SPACING) => SPACING[size];

export const getTypography = (property: keyof typeof TYPOGRAPHY, value: string) => {
  return TYPOGRAPHY[property][value as keyof typeof TYPOGRAPHY[typeof property]];
};