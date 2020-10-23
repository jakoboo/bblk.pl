import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Padded from '../Padded';
import Text from '../Text';

const getFontSize = (theme, breakpoint) => {
  return theme.fontSizes.m[breakpoint];
};

const Root = styled.blockquote`
  position: relative;
  margin-left: -${(p) => p.theme.spacing.xl};
  padding-left: ${(p) => p.theme.spacing.xl};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(${(p) => p.theme.spacing.xl} / 3);
    width: calc(${(p) => p.theme.spacing.xl} / 3);

    background-color: ${(p) => p.theme.bgAccent};
  }
`;

const QuoteText = styled(Text)`
  font-family: ${(p) => p.theme.fonts.serif};
  //font-style: italic;
  font-size: ${(p) => getFontSize(p.theme, 'mobile')};
  color: ${(p) => p.theme.textColor};

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    font-size: ${(p) => getFontSize(p.theme, 'tablet')};
  }

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    font-size: ${(p) => getFontSize(p.theme, 'desktop')};
  }
`;

const Author = styled(Text)`
  display: block;
  text-align: right;

  &::before {
    content: '— ';
  }
`;

const Quote = ({ author, color, element, children, ...props }) => (
  <Padded vertical='s'>
    <Root
      color={color}
      as={element}
      {...props}
      itemscope
      itemtype='http://schema.org/CreativeWork'
      itemprop='citation'
    >
      <QuoteText>{children}</QuoteText>
      {author && (
        <Author itemprop='author' element='small'>
          {author}
        </Author>
      )}
    </Root>
  </Padded>
);

Quote.propTypes = {
  author: PropTypes.string,
  color: PropTypes.oneOf(['text', 'gray700', 'gray500', 'gray300']),
  element: PropTypes.string,
};

Quote.defaultProps = {
  element: 'blockquote',
};

export default Quote;
