import { extendTheme } from "native-base";

const theme = extendTheme({
  config: {
    // Changing initialColorMode to 'light'
    initialColorMode: "light"
  }
});

export type ITheme = typeof theme;

export default theme;
