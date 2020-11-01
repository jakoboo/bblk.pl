import styled, { css } from 'styled-components';

export const Root = styled.section`
  position: relative;
  transition: background-color 100ms ease-out;

  ${({ elevated }) =>
    elevated
      ? css`
          z-index: 1;
          background: ${(p) => p.theme.bgSecondary};
          box-shadow: ${(p) => p.theme.elevations['4dp']};
        `
      : null}
`;
