import React from 'react';
// Highlighting for code blocks
import 'prismjs/themes/prism.css';

import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
