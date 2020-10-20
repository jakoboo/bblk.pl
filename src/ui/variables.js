export const THEME_KEY = 'theme';
export const INITIAL_THEME_ATTR = 'data-theme';

export const colors = {
  text: {
    light: 'hsl(0deg, 0%, 10%)',
    dark: 'hsl(0deg, 0%, 100%)',
  },
  background: {
    light: 'hsl(200deg, 10%, 95%)',
    dark: 'hsl(200deg, 5%, 10%)',
  },
  primary: {
    light: 'hsl(205deg, 70%, 50%)',
    dark: 'hsl(328deg, 81%, 65%)',
  },
  secondary: {
    light: 'hsl(332deg, 80%, 65%)',
    dark: 'hsl(50deg, 69%, 61%)',
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray300: {
    light: 'hsl(0deg, 0%, 80%)',
    dark: 'hsl(0deg, 0%, 20%)',
  },
  gray500: {
    light: 'hsl(0deg, 0%, 50%)',
    dark: 'hsl(0deg, 0%, 50%)',
  },
  gray700: {
    light: 'hsl(0deg, 0%, 30%)',
    dark: 'hsl(0deg, 0%, 70%)',
  },
};

export const elevations = {
  low: '0 0 0 1px rgba(0,0,0,0.05),0 2px 5px rgba(0,0,0,0.2)',
  medium: '0 0 0 1px rgba(0,0,0,0.05),0 5px 10px rgba(0,0,0,0.22)',
  high: '0 0 0 1px rgba(0,0,0,0.05),0 10px 20px rgba(0,0,0,0.25)',
};

export const fonts = {
  montserrat: `"Montserrat", Sans-Serif`,
  roboto: `"Roboto", Sans-Serif`,
  serif: `"DM Serif Text", serif`,
  serifDisplay: `"DM Serif Display", serif`,
};

export const fontSizes = {
  xxxl: {
    mobile: '2.125rem',
    tablet: '2.5rem',
    desktop: '2.875rem',
  },
  xxl: {
    mobile: '1.875rem',
    tablet: '2rem',
    desktop: '2.25rem',
  },
  xl: {
    mobile: '1.625rem',
    tablet: '1.75rem',
    desktop: '1.875rem',
  },
  l: {
    mobile: '1.25rem',
    tablet: '1.375rem',
    desktop: '1.5rem',
  },
  m: {
    mobile: '1rem',
    tablet: '1rem',
    desktop: '1.125rem',
  },
  s: {
    mobile: '0.875rem',
    tablet: '0.875rem',
    desktop: '0.875rem',
  },
};

export const spacing = {
  '10x': '10rem',
  '8x': '8rem',
  '5x': '5rem',
  '4x': '4rem',
  '3x': '3rem',
  '2x': '2rem',
  'xxl': '1.75rem',
  'xl': '1.5rem',
  'l': '1.25rem',
  'm': '1rem',
  's': '0.75rem',
  'xs': '0.5rem',
};

export const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  desktop: '992px',
  desktopLarge: '1200px',
};

export default {
  colors,
  elevations,
  fonts,
  fontSizes,
  spacing,
  breakpoints,
};
