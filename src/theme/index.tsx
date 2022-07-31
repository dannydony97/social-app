import { DefaultTheme, Theme } from "@react-navigation/native";
import { extendTheme, themeTools } from "native-base";

const navigationLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "black",
    text: "black"
  }
}

const navigationDarkTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "white",
    background: "black",
    card: "black",
    text: "white",
  }
}

const theme = extendTheme({
  config: {
    // Changing initialColorMode to 'light'
    initialColorMode: "dark"
  },
});

export { theme, navigationLightTheme, navigationDarkTheme };
