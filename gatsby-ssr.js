import React from 'react';

import Root from './src/components/Root';
import Layout from './src/components/Layout';

export const wrapRootElement = ({ element }) => <Root>{element}</Root>;
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
