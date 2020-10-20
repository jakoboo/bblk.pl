import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
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
  backgroundAccent: 'var(--theme-colors-gray300)',
};

const darkTheme = {
  backgroundAccent: 'var(--theme-colors-gray300)',
};

export const Themes = {
  light: { ...rootTheme, ...lightTheme },
  dark: { ...rootTheme, ...darkTheme },
};

export const ThemeContext = createContext({
  themeName: undefined,
  toggle: () => {},
});
export const useTheme = () => useContext(ThemeContext);

const getTheme = (window) => {
  const root = window.document.documentElement;
  // Because colors matter so much for the initial page view, we're
  // doing a lot of the work in gatsby-ssr. That way it can happen before
  // the React component tree mounts.
  const initialColorValue = root.getAttribute(INITIAL_THEME_ATTR);
  return initialColorValue;
};

export const ContextThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(getTheme(window));

  const contextValue = useMemo(() => {
    function toggle() {
      const root = window.document.documentElement;
      const newThemeName = themeName === 'light' ? 'dark' : 'light';

      localStorage.setItem(THEME_KEY, newThemeName);
      root.setAttribute(INITIAL_THEME_ATTR, newThemeName);
      setThemeName(newThemeName);
    }

    return {
      themeName,
      toggle,
    };
  }, [themeName]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={Themes[themeName]}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
