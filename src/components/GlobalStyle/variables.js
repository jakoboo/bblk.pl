import { colors } from '../../ui/theme';

export const lightValues = Object.entries(colors).reduce(
  (acc, [name, colorByTheme]) => {
    return `${acc}\n--theme-colors-${name}: ${colorByTheme.light};`;
  },
  ''
);

export const darkValues = Object.entries(colors).reduce(
  (acc, [name, colorByTheme]) => {
    return `${acc}\n--theme-colors-${name}: ${colorByTheme.dark};`;
  },
  ''
);
