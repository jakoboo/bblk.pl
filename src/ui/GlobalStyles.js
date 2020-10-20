import { createGlobalStyle } from 'styled-components';
import { createThemeColorsCssString } from '../utils';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    transition: color 100ms linear, background-color 100ms linear;
  }

  ${createThemeColorsCssString()}
  
  body {
    margin: 0;

    background-color: ${(p) => p.theme.backgroundColor};

    color: ${(p) => p.theme.textColor};
    font-family: ${(p) => p.theme.fonts.roboto};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${(p) => p.theme.secondaryColor};

    &.primary {
      color: ${(p) => p.theme.primaryColor};
    }
  }
`;

export default GlobalStyle;
