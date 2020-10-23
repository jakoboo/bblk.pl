import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const ButtonWrap = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  color: ${(p) => p.theme.textColor};
  font-family: ${(p) => p.theme.fonts.roboto};
  font-size: ${(p) => p.theme.fontSizes.xl.mobile};
  line-height: 1;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  transition: transform 50ms linear, box-shadow 50ms linear;
  cursor: pointer;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    font-size: ${(p) => p.theme.fontSizes.xl.tablet};
  }

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    font-size: ${(p) => p.theme.fontSizes.xl.desktop};
  }

  ${({ unstyled }) =>
    unstyled
      ? null
      : css`
          display: inline-block;
          width: 100%;
          max-width: 350px;
          padding: 5px;
          border-radius: 10px;
          color: ${(p) => p.theme.primaryColor};
          box-shadow: ${(p) => p.theme.elevations.low};
          background: linear-gradient(
            to right,
            ${(p) => p.theme.primaryColor},
            ${(p) => p.theme.secondaryColor}
          );

          &:hover:not(:active) {
            transform: translateY(-5%) scale(1.01);
            box-shadow: ${(p) => p.theme.elevations.medium};
          }
          &:active {
            outline: 0;
            transform: translateY(-5%) scale(0.9);
          }
        `}
`;

const ButtonContent = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: ${(p) => p.theme.bgColor};
`;

const Button = forwardRef(({ unstyled, element, children, ...props }, ref) => (
  <ButtonWrap
    ref={ref}
    tabIndex={0}
    unstyled={unstyled}
    role='button'
    as={element}
    {...props}
  >
    {unstyled ? children : <ButtonContent>{children}</ButtonContent>}
  </ButtonWrap>
));

export default Button;
