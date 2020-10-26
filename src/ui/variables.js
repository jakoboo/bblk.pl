export const THEME_KEY = 'theme';
export const INITIAL_THEME_ATTR = 'data-theme';

export const colors = {
  text: {
    light: 'hsl(0, 1%, 27%)',
    dark: 'hsl(0, 0%, 100%)',
  },
  bgPrimary: {
    light: 'hsl(0, 0%, 100%)',
    dark: 'hsl(200, 5%, 10%)',
  },
  bgSecondary: {
    light: 'hsl(220, 10%, 92%)',
    dark: 'hsl(200, 7%, 20%)',
  },
  bgWatermark: {
    light: 'hsl(220, 5%, 95%)',
    dark: 'hsl(200, 5%, 15%)',
  },
  bgAccent: {
    light: 'hsl(0, 0%, 61%)',
    dark: 'hsl(200, 5%, 49%)',
  },
  primary: {
    light: 'hsl(205, 70%, 50%)',
    dark: 'hsl(328, 81%, 65%)',
  },
  secondary: {
    light: 'hsl(332, 80%, 65%)',
    dark: 'hsl(50, 69%, 61%)',
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray300: {
    light: 'hsl(0, 0%, 70%)',
    dark: 'hsl(0, 0%, 30%)',
  },
  gray500: {
    light: 'hsl(0, 0%, 50%)',
    dark: 'hsl(0, 0%, 50%)',
  },
  gray700: {
    light: 'hsl(0, 0%, 30%)',
    dark: 'hsl(0, 0%, 70%)',
  },
};

export const elevations = {
  '1dp':
    '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
  '2dp':
    '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
  '3dp':
    '0px 1px 8px 0px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12)',
  '4dp':
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
  '5dp':
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
  '6dp':
    '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
  '7dp':
    '0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
  '8dp':
    '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
  '9dp':
    '0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
  '10dp':
    '0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
  '11dp':
    '0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
  '12dp':
    '0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
  '13dp':
    '0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12)',
  '14dp':
    '0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12)',
  '15dp':
    '0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
  '16dp':
    '0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
  '17dp':
    '0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12)',
  '18dp':
    '0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12)',
  '19dp':
    '0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12)',
  '20dp':
    '0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
  '21dp':
    '0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12)',
  '22dp':
    '0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12)',
  '23dp':
    '0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12)',
  '24dp':
    '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
};

export const fonts = {
  montserrat: `"Montserrat", Sans-Serif`,
  roboto: `"Roboto", Sans-Serif`,
  serif: `"DM Serif Text", serif`,
  serifDisplay: `"DM Serif Display", serif`,
};

export const fontSizes = {
  xxxl: {
    mobile: '3rem',
    tablet: '3.5rem',
    desktop: '4rem',
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
