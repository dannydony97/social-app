import React from "react";
import { Box, NativeBaseProvider } from "native-base";

import theme, { ITheme } from "./src/theme";
import Authentication from "./src/routes/Authentication";

// Making the custom theme typing available
declare module "native-base" {
  interface ICustomTheme extends ITheme { }
}


const App: React.FC<{}> = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Authentication />
    </NativeBaseProvider>
  );
}

export default App;