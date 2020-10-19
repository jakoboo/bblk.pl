import { colors, INITIAL_THEME_ATTR } from "./theme"

export const createColorsCssString = () => {
  const cssLightVariableString = Object.entries(colors).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.light};`
    },
    ""
  )

  const cssDarkVariableString = Object.entries(colors).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.dark};`
    },
    ""
  )

  const wrappedInSelectors = `
    :root { ${cssLightVariableString} }
  
    :root[${INITIAL_THEME_ATTR}=dark] { ${cssDarkVariableString} }
  `

  return wrappedInSelectors
}
