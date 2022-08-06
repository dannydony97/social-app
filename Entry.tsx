import { StatusBar, useColorMode } from "native-base";
import React from "react";
import { UserProvider } from "./src/providers/UserProvider";
import Authentication from "./src/routes/Authentication";

const Entry: React.FC<{}> = () => {

  const { colorMode } = useColorMode();

  return (
    <UserProvider>
      <StatusBar
        barStyle={colorMode === 'dark' ? "light-content" : "dark-content"} />
      <Authentication />
    </UserProvider>
  );
}

export default Entry;