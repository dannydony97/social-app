import React from "react";
import { NativeBaseProvider } from "native-base";

import { theme } from "./src/theme";
import Entry from "./Entry";

const App: React.FC<{}> = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Entry />
    </NativeBaseProvider>
  );
}

export default App;