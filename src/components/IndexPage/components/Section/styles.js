import styled, { css } from 'styled-components';

export const Root = styled.section`
  position: relative;

  ${({ elevated }) =>
    elevated
      ? css`
          z-index: 1;
          background: ${(p) => p.theme.bgSecondary};
          box-shadow: ${(p) => p.theme.elevations['4dp']};
        `
      : null}
`;
