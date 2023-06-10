import { withThemeFromJSXProvider } from "@storybook/addon-styling"
import { ThemeProvider } from "styled-components"
import GlobalStyles from '../src/styles/GlobalStyle'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// export const decorators = [
//   withThemeFromJSXProvider({
//     themes:{},
//     Provider: ThemeProvider,
//     GlobalStyles: GlobalStyles
//   })
// ] 
