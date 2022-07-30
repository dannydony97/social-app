import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import Welcome from "../screens/Welcome";
import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";

const Stack = createNativeStackNavigator();

export type AuthenticationStackParamList = {
  Welcome: undefined
  LogIn: undefined
  SignUp: undefined
}

const linking: LinkingOptions<AuthenticationStackParamList> = {
  prefixes: ['myapp://', 'https://myapp.com', 'https://*.myapp.com'],
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
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="welcome">
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