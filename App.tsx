import React from "react";
import { Box, NativeBaseProvider } from "native-base";
import Welcome from "./src/screens/Welcome";

import theme, { ITheme } from "./src/theme";

// Making the custom theme typing available
declare module "native-base" {
  interface ICustomTheme extends ITheme { }
}


const App: React.FC<{}> = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Box
      _light={{ bg: "muted.200" }}
      _dark={{ bg: "muted.900" }}
      minHeight="100%"
      >
        <Welcome />
      </Box>
    </NativeBaseProvider>
  );
}

export default App;