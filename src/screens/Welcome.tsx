import React from "react"
import { useLinkTo } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Heading, Image, ScrollView, Text, View, VStack } from "native-base";
import { StyleSheet } from "react-native";
import { AuthenticationStackParamList } from "../routes/Authentication";
import { Utils } from "../Utils";
import { Variables } from "../Variables";
import ScrollableCenteredContainer from "../components/ScrollableCenteredContainer";

/**
 * Welcome screen
 */
const Welcome: React.FC<NativeStackScreenProps<AuthenticationStackParamList>> = ({ route, navigation }) => {

  const linkTo = useLinkTo();

  /**
   * On 'Log in' button press 
   */
  const onLogInPress = () => {
    if (Utils.isWeb()) {
      linkTo("/login");
    }
    navigation.navigate("LogIn");
  }

  /**
   * On 'Sign up' button press
   */
  const onSignUpPress = () => {
    if (Utils.isWeb()) {
      linkTo("/signup");
    }
    navigation.navigate("SignUp");
  }

  return (
    <ScrollableCenteredContainer>
      <Heading size="lg">Welcome to {Variables.appicationName}</Heading>
      <Text>Street workout community</Text>
      <Image
        _dark={{ source: require("../../assets/dark-theme-logo.png") }}
        _light={{ source: require("../../assets/white-theme-logo.png") }}
        alt={Variables.appicationName}
        style={styles.logo}
      />
      <Button
        width="90%"
        variant="solid"
        onPress={onLogInPress}
      >Log in
      </Button>
      <Button
        width="90%"
        variant="outline"
        onPress={onSignUpPress}
      >Sign up
      </Button>
    </ScrollableCenteredContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: '80%',
    height: undefined,
    aspectRatio: 1 / 1
  },
})

export default Welcome;