import { colors, INITIAL_THEME_ATTR } from './ui/variables';

export const createThemeColorsCssString = () => {
  const cssLightVariableString = Object.entries(colors).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--theme-colors-${name}: ${colorByTheme.light};`;
    },
    ''
  );

  const cssDarkVariableString = Object.entries(colors).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--theme-colors-${name}: ${colorByTheme.dark};`;
    },
    ''
  );

  const wrappedInSelectors = `
    :root { ${cssLightVariableString} }
  
    :root[${INITIAL_THEME_ATTR}=dark] { ${cssDarkVariableString} }
  `;

  return wrappedInSelectors;
};
