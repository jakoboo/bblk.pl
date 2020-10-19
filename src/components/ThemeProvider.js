import React, { createContext, useState, useEffect, useMemo } from 'react';
import { ThemeProvider } from './GlobalStyles';
import theme, { THEME_KEY, INITIAL_THEME_ATTR } from '../theme';

export const MemThemeProvider = ({ children }) => {
  const [colorMode, rawSetTheme] = useState('undefined');

  useEffect(() => {
    const root = window.document.documentElement;

    // Because colors matter so much for the initial page view, we're
    // doing a lot of the work in gatsby-ssr. That way it can happen before
    // the React component tree mounts.
    const initialColorValue = root.getAttribute(INITIAL_THEME_ATTR);

    rawSetTheme(initialColorValue);
  }, []);

  const contextValue = useMemo(() => {
    function setTheme(newValue) {
      const root = window.document.documentElement;

      localStorage.setItem(THEME_KEY, newValue);

      root.setAttribute(INITIAL_THEME_ATTR, newValue);

      rawSetTheme(newValue);
    }

    return {
      colorMode,
      setTheme,
    };
  }, [colorMode, rawSetTheme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
