import React from 'react';

import { ContextThemeProvider } from '../../ui/ThemeContext';

import Header from '../Header';
import ContentWrap from '../../ui/ContentWrap';
import Text from '../../ui/Text';

const Layout = ({ location, children }) => {
  console.log(location);
  return (
    <ContextThemeProvider>
      <Header />
      <main>{children}</main>
      <footer>
        <ContentWrap>
          <Text order='meta'>© {new Date().getFullYear()}, Jakub Bąbelek</Text>
        </ContentWrap>
      </footer>
    </ContextThemeProvider>
  );
};

export default Layout;
