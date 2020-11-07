import { createGlobalStyle } from 'styled-components';
import { lightValues, darkValues } from './variables';

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: border-color 200ms ease-out, background 200ms ease-out, color 200ms ease-out, fill 200ms ease-out, stroke 200ms ease-out, stop-color 200ms ease-out;
    
    @media (prefers-reduced-motion: reduce) {
      animation: none;
      transition: none;
    }
  }

  :root {
    font-size: 100%;
    ${lightValues}

    [data-theme="dark"] {
      ${darkValues}
    }

    .no-js {
      @media (prefers-color-scheme: dark) {
        ${darkValues}
      }
    }
  }
  
  body {
    width: 100%;
    min-width: 20rem;

    background-color: ${(p) => p.theme.bgColor};

    color: ${(p) => p.theme.textColor};
    font-family: ${(p) => p.theme.fonts.roboto};
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  .gatsby-highlight {
    background-color: ${(p) => p.theme.bgWatermark};
    box-shadow: ${(p) => p.theme.elevations['1dp']};
    border-radius: 0.3em;
    margin: ${(p) => p.theme.spacing['2x']} 0;
    padding: 1em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    background-color: ${(p) => p.theme.bgWatermark};
    padding: 0;
    padding-left: 2.8em;
    overflow: initial;
  }

  .gatsby-highlight pre[class*="language-"],
  .gatsby-highlight code[class*="language-"] {
    color: ${(p) => p.theme.textColor};
    text-shadow: ${(p) => p.theme.hlShadow};

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: ${(p) => p.theme.hlComment};
    }

    .token.punctuation {
      color: ${(p) => p.theme.hlPunctuation};
    }

    .token.property,
    .token.tag,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: ${(p) => p.theme.hlProperty};
    }

    .token.boolean,
    .token.number {
      color: ${(p) => p.theme.hlBoolean};
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: ${(p) => p.theme.hlSelector};
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.variable {
      color: ${(p) => p.theme.textColor};
    }

    .token.atrule,
    .token.attr-value,
    .token.function,
    .token.class-name {
      color: ${(p) => p.theme.hlFunction};
    }

    .token.keyword {
      color: #66d9ef;
    }

    .token.regex,
    .token.important {
      color: #fd971f;
    }
  }
`;
