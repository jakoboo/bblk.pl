import React, { forwardRef, useRef } from 'react';
import styled from 'styled-components';
import Padded from '../Padded';
import Spaced from '../Spaced';
import Text from '../Text';

const ButtonWrap = styled.button`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: ${({ theme }) => theme.fontSizes.xl.mobile};
  line-height: 1;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  transition: all 200ms linear;
  cursor: pointer;

  display: inline-block;
  padding: 5px;
  border: 0;
  border-radius: 10px;
  color: var(--color-primary);
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.3);
  background: linear-gradient(
    to right,
    var(--color-primary),
    var(--color-secondary)
  );

  &:hover:not(:active) {
    transform: translateY(-5%);
    box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xl.tablet};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.xl.desktop};
  }
`;

const ButtonContent = styled.div`
  border-radius: 5px;
  background: var(--color-background);
`;

const Button = forwardRef(({ element, children, ...props }, ref) => (
  <ButtonWrap ref={ref} tabIndex={0} role='button' as={element} {...props}>
    <ButtonContent>{children}</ButtonContent>
  </ButtonWrap>
));

export default Button;
