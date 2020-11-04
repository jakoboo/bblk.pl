import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';
import { ContextThemeProvider } from '../../ui/ThemeContext';
import Header from '../Header';
import ContentWrap from '../../ui/ContentWrap';
import Text from '../../ui/Text';
import Padded from '../../ui/Padded';
import Link from '../../ui/Link';
import Spaced from '../../ui/Spaced';
import Heading from '../../ui/Heading';
import ArticleHeading from '../ArticleHeading';
import Quote from '../../ui/Quote';
import { Code } from 'styled-icons/ionicons-outline';

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
        <MainWrap aria-label='Main content'>
          <MDXProvider
            components={{
              h1: (props) => <Heading level={1} {...props} />,
              h2: (props) => (
                <Spaced vertical='m'>
                  <ArticleHeading level={2} {...props} />
                </Spaced>
              ),
              h3: (props) => (
                <Spaced top='2x' bottom='m'>
                  <Heading level={3} {...props} />
                </Spaced>
              ),
              h4: (props) => (
                <Spaced top='2x' bottom='m'>
                  <Heading level={4} {...props} />
                </Spaced>
              ),
              h5: (props) => (
                <Spaced top='xxl' bottom='m'>
                  <Heading level={5} {...props} />
                </Spaced>
              ),
              h6: (props) => (
                <Spaced top='xl' bottom='s'>
                  <Heading level={6} {...props} />
                </Spaced>
              ),
              p: (props) => {
                if (
                  props.children.props &&
                  props.children.props.originalType === 'figure'
                ) {
                  return (
                    <Spaced vertical='2x'>
                      <figure {...props} />
                    </Spaced>
                  );
                }

                return (
                  <Spaced bottom='m'>
                    <Text {...props} />
                  </Spaced>
                );
              },
              ul: (props) => (
                <Spaced bottom='m' left='m'>
                  <ul {...props} />
                </Spaced>
              ),
              ol: (props) => (
                <Spaced bottom='m' left='m'>
                  <ol {...props} />
                </Spaced>
              ),
              li: (props) => (
                <Spaced bottom='xs'>
                  <li {...props} />
                </Spaced>
              ),
              a: (props) => <Link {...props} />,
              Quote: (props) => (
                <Spaced vertical='xl'>
                  <Quote {...props} />
                </Spaced>
              ),
            }}
          >
            {children}
          </MDXProvider>
        </MainWrap>
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
