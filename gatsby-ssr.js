import React from 'react';
import Terser from 'terser';

import { THEME_KEY, INITIAL_THEME_ATTR } from './src/ui/variables';

import { ContextThemeProvider } from './src/ui/ThemeContext';
import Layout from './src/components/Layout';

function setTheme() {
  const themeKey = '%THEME_KEY%';
  const initialThemeAttr = '%INITIAL_THEME_ATTR%';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(themeKey);

  let theme = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    theme = persistedPreference;
  } else {
    theme = prefersDarkFromMQ ? 'dark' : 'light';
  }

  let root = document.documentElement;

  root.setAttribute(initialThemeAttr, theme);
}

const ThemeScriptTag = () => {
  const boundFn = String(setTheme)
    .replace('%THEME_KEY%', THEME_KEY)
    .replace('%INITIAL_THEME_ATTR%', INITIAL_THEME_ATTR);

  let calledFunction = `(${boundFn})()`;

  calledFunction = Terser.minify(calledFunction).code;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setPreBodyComponents(<ThemeScriptTag />);
};

export const wrapRootElement = ({ element, props }) => (
  <ContextThemeProvider {...props}>{element}</ContextThemeProvider>
);
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
