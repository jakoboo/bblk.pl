import styled from 'styled-components';
import Heading from '../../ui/Heading';

export const HeadingWrap = styled(Heading)`
  position: relative;
  z-index: 0;

  &::before {
    content: '···';
    display: block;
    font-size: ${(p) => p.theme.spacing['2x']};
    line-height: ${(p) => p.theme.spacing['5x']};
    text-align: center;
    letter-spacing: 2rem;
  }
`;

export const HeadingLink = styled.a`
  display: none;
  position: absolute;
  top: ${(p) => p.theme.spacing['5x']};
  padding-top: 0.5rem;
  color: ${(p) => p.theme.bgAccent};
  font-size: initial;
  text-decoration: none;
  transform: translateX(calc(-100% - 0.5rem));

  @media (min-width: ${(p) => p.theme.breakpoints.desktop}) {
    display: block;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    pointer-events: none;
    stroke: ${(p) => p.theme.primaryColor};

    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
`;
