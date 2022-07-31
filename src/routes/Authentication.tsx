import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import Welcome from "../screens/Welcome";
import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import { Utils } from "../Utils";
import { useColorMode } from "native-base";
import { navigationDarkTheme, navigationLightTheme } from "../theme";

const Stack = createNativeStackNavigator();

export type AuthenticationStackParamList = {
  Welcome: undefined
  LogIn: undefined
  SignUp: undefined
}

const linking: LinkingOptions<AuthenticationStackParamList> = {
  prefixes: [],
  config: {
    initialRouteName: 'Welcome',
    screens: {
      Welcome: 'welcome',
      LogIn: 'login',
      SignUp: 'signup'
    }
  }
}

const Authentication: React.FC<{}> = () => {

  const { colorMode } = useColorMode();

  return (
    <NavigationContainer
      linking={linking}
      theme={colorMode === 'dark' ? navigationDarkTheme : navigationLightTheme}>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{
          headerShown: !Utils.isWeb(),
          headerTransparent: true,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            title: "Welcome"
          }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{
            title: "Log In"
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: "Sign Up"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Authentication;