import React from 'react';

import { MemThemeProvider } from '../ThemeProvider';
import GlobalStyles from '../GlobalStyles';

import Header from '../Header';
import ContentWrap from '../../ui/ContentWrap';
import Text from '../../ui/Text';

const Layout = ({ children }) => {
  return (
    <MemThemeProvider>
      <GlobalStyles />
      <div className='global-wrapper'>
        <Header />
        <main>{children}</main>
        <footer>
          <ContentWrap>
            <Text order='meta'>
              © {new Date().getFullYear()}, Jakub Bąbelek
            </Text>
          </ContentWrap>
        </footer>
      </div>
    </MemThemeProvider>
  );
};

export default Layout;
