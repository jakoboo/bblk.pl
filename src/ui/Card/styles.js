import styled from 'styled-components';

export const Root = styled.div`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: ${(p) => p.theme.elevations['1dp']};
  transition: background-color 100ms ease-out, box-shadow 200ms ease-out,
    transform 200ms ease-out;

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
