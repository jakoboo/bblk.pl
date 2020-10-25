import React from 'react';
import styled from 'styled-components';

import { ContextThemeProvider } from '../../ui/ThemeContext';

import Header from '../Header';
import ContentWrap from '../../ui/ContentWrap';
import Text from '../../ui/Text';
import Padded from '../../ui/Padded';

const LayoutWrap = styled.div`
  overflow: hidden;
  overflow-y: auto;
`;

const MainWrap = styled.main`
  // height of the <Header />
  padding-top: 5rem;
`;

const Layout = ({ location, children }) => {
  return (
    <ContextThemeProvider>
      <LayoutWrap>
        <Header />
        <MainWrap>{children}</MainWrap>
        <footer>
          <Padded vertical='4x'>
            <ContentWrap>
              <Text order='meta'>
                © {new Date().getFullYear()}, Jakub Bąbelek
              </Text>
            </ContentWrap>
          </Padded>
        </footer>
      </LayoutWrap>
    </ContextThemeProvider>
  );
};

export default Layout;
