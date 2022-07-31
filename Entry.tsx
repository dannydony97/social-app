import { StatusBar, useColorMode } from "native-base";
import React from "react";
import Authentication from "./src/routes/Authentication";

const Entry: React.FC<{}> = () => {

  const { colorMode } = useColorMode();

  return (
    <>
      <StatusBar
        barStyle={colorMode === 'dark' ? "light-content" : "dark-content"} />
      <Authentication />
    </>
  );
}

export default Entry;