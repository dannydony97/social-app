import { Box, Button, Heading, Image, Text, VStack } from "native-base";
import React from "react"
import { SafeAreaView, StyleSheet } from "react-native";
import { Utils } from "../Utils";
import { Variables } from "../Variables";

const width = Utils.getStyle(600, "100%");
const buttonWidth = Utils.getStyle("60%", "90%");
const justifyContent = Utils.getStyle("center", "flex-start");

const Welcome: React.FC<{}> = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Box
        alignItems="center"
        justifyContent={justifyContent}
        minHeight="100%"
      >
        <VStack
          space={4}
          alignItems="center"
          width={width}
          py={4}
          rounded="2xl"
        >
          <Heading size="lg">Welcome to {Variables.appicationName}</Heading>
          <Text>Street workout community</Text>
          <Image
            _dark={{
              source: require("../../assets/dark-theme-logo.png")
            }}
            _light={{
              source: require("../../assets/white-theme-logo.png")
            }}
            alt={Variables.appicationName}
            style={styles.logo}
          />
          <Button width={buttonWidth} variant="solid">Log in</Button>
          <Button width={buttonWidth} variant="outline">Sign up</Button>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: '90%',
    height: undefined,
    aspectRatio: 1 / 1
  }
})

export default Welcome;