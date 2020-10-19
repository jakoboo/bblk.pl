import * as styled from 'styled-components';
import { createColorsCssString } from '../utils';

export const { createGlobalStyle, ThemeProvider, css } = styled;

export default createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    transition: color 100ms linear, background-color 100ms linear;
  }

  ${createColorsCssString()}

  :root {
    font-size: clamp(16px, 1vw, 24px);
  }

  body {
    margin: 0;

    background-color: var(--color-background);
    
    color: var(--color-text);
    font-family: ${({ theme }) => theme.fonts.roboto};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: var(--color-secondary);

    &.primary {
      color: var(--color-primary);
    }
  }

  .container {
    margin: auto;
    padding: 0 30px;
    width: 100%;
  }

  @media (min-width: 768px) {
    .container {
      width: 100%;
    }
  }

  @media (min-width: 992px) { 
    .container {
      width: 992px;
    }
  }

  @media (min-width: 1200px) { 
    .container {
      width: 1200px;
    }
  }
`;
