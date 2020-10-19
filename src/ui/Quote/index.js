import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Padded from '../Padded';
import Text from '../Text';

const getFontSize = (theme, breakpoint) => {
  return theme.fontSizes.m[breakpoint];
};

const getColor = (color) => {
  if (color) return `var(--color-${color})`;
  else return 'var(--color-text)';
};

const Root = styled.blockquote`
  position: relative;
  margin-left: -${({ theme }) => theme.spacing.xl};
  padding-left: ${({ theme }) => theme.spacing.xl};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(${({ theme }) => theme.spacing.xl} / 3);
    width: calc(${({ theme }) => theme.spacing.xl} / 3);

    background-color: var(--color-backgroundInverted);
  }
`;

const QuoteText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.serif};
  //font-style: italic;
  font-size: ${({ theme }) => getFontSize(theme, 'mobile')};
  color: ${({ color }) => getColor(color)};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => getFontSize(theme, 'tablet')};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => getFontSize(theme, 'desktop')};
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
