import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from '../Root';
import GlobalStyle from '../GlobalStyle';
import Header from '../Header';
import ContentWrap from '../../ui/ContentWrap';
import Text from '../../ui/Text';
import Padded from '../../ui/Padded';
import Link from '../../ui/Link';
import Spaced from '../../ui/Spaced';
import Heading from '../../ui/Heading';
import ArticleHeading from '../ArticleHeading';
import Quote from '../../ui/Quote';
import { LayoutWrap, MainWrap } from './styles';

const Layout = ({ location, children }) => {
  const { theme } = useContext(ThemeContext);
  const mainRef = useRef();

  useEffect(() => {
    alert('test');
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LayoutWrap>
        <Header location={location} />
        <MainWrap id='main' aria-label='Main content' ref={mainRef}>
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
    </ThemeProvider>
  );
};

Layout.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Layout;
