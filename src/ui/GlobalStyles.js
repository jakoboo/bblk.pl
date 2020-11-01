import { createGlobalStyle } from 'styled-components';
import { createThemeColorsCssString } from '../utils';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  ${createThemeColorsCssString()}
  
  body {
    margin: 0;

    background-color: ${(p) => p.theme.bgColor};

    color: ${(p) => p.theme.textColor};
    font-family: ${(p) => p.theme.fonts.roboto};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    transition: color 100ms ease-out, background-color 100ms ease-out;
  }
`;

export default GlobalStyle;
