import React, { useState, useEffect } from 'react';
import themeValues from '../../ui/theme';

const theme = {
  ...themeValues,
  bgColor: 'var(--theme-colors-bgPrimary)',
  bgSecondary: 'var(--theme-colors-bgSecondary)',
  bgWatermark: 'var(--theme-colors-bgWatermark)',
  bgAccent: 'var(--theme-colors-bgAccent)',
  textColor: 'var(--theme-colors-text)',
  primaryColor: 'var(--theme-colors-primary)',
  secondaryColor: 'var(--theme-colors-secondary)',
  gray700Color: 'var(--theme-colors-gray700)',
  gray500Color: 'var(--theme-colors-gray500)',
  gray300Color: 'var(--theme-colors-gray300)',
  hlShadow: 'var(--theme-colors-hlShadow)',
  hlComment: 'var(--theme-colors-hlComment)',
  hlPunctuation: 'var(--theme-colors-hlPunctuation)',
  hlProperty: 'var(--theme-colors-hlProperty)',
  hlBoolean: 'var(--theme-colors-hlBoolean)',
  hlSelector: 'var(--theme-colors-hlSelector)',
  hlFunction: 'var(--theme-colors-hlFunction)',
};

export const ThemeContext = React.createContext({
  theme: theme,
  themeName: null,
  setTheme: () => {},
});

const Root = ({ children }) => {
  const [themeName, setThemeName] = useState();

  useEffect(() => {
    // set initial theme based on value set on window
    setThemeName(window.__theme);

    // set up listener for custom theme change event
    window.addEventListener('themeChange', (event) => {
      setThemeName(event.detail);
    });
  }, []);

  // allow user to manually change their theme
  const setTheme = (themeName) => {
    window.__setPreferredTheme(themeName);
    //addAlert(`Theme set to ${themeName}`);
  };

  if (!themeName) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Root;
