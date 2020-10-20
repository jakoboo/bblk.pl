import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import variables, { THEME_KEY, INITIAL_THEME_ATTR } from './variables';

const rootTheme = {
  ...variables,
  backgroundColor: 'var(--theme-colors-background)',
  textColor: 'var(--theme-colors-text)',
  primaryColor: 'var(--theme-colors-primary)',
  secondaryColor: 'var(--theme-colors-secondary)',
  gray700Color: 'var(--theme-colors-gray700)',
  gray500Color: 'var(--theme-colors-gray500)',
  gray300Color: 'var(--theme-colors-gray300)',
};

const lightTheme = {
  backgroundInverted: variables.colors.background.dark,
};

const darkTheme = {
  backgroundInverted: variables.colors.background.light,
};

export const Themes = {
  light: { ...rootTheme, ...lightTheme },
  dark: { ...rootTheme, ...darkTheme },
};

export const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const MemThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.getAttribute(INITIAL_THEME_ATTR);

    setThemeName(initialColorValue);
  }, []);

  const toggle = () => {
    const root = window.document.documentElement;
    const newThemeName = themeName === 'light' ? 'dark' : 'light';

    localStorage.setItem(THEME_KEY, newThemeName);
    root.setAttribute(INITIAL_THEME_ATTR, newThemeName);
    setThemeName(newThemeName);
  };

  const theme = Themes[themeName];

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme: themeName, toggle }}>
        <GlobalStyles />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
