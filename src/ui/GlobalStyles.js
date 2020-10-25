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

    background-color: ${(p) => p.theme.bgColor};

    color: ${(p) => p.theme.textColor};
    font-family: ${(p) => p.theme.fonts.roboto};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
