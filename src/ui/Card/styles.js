import styled from 'styled-components';

export const Root = styled.div`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: ${(p) => p.theme.elevations['1dp']};
  transition: all 200ms ease-out;

  > * {
    height: 100%;
  }

  &:hover,
  &:active {
    transform: ${({ hoverable }) => (hoverable ? 'translateY(-.5rem)' : '')};
    box-shadow: ${({ theme, hoverable }) =>
      hoverable ? theme.elevations['8dp'] : null};
  }
`;
