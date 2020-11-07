import React from 'react';
// Tippy
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';
// Highlighting for code blocks
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import { ContextThemeProvider } from './src/ui/ThemeContext';
import Layout from './src/components/Layout';

export const wrapRootElement = ({ element, props }) => (
  <ContextThemeProvider {...props}>{element}</ContextThemeProvider>
);
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
