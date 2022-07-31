import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthenticationStackParamList } from "../routes/Authentication";
import { Button, FormControl, Heading, Input, ScrollView, Stack, View, VStack } from "native-base";
import { Utils } from "../Utils";
import ScrollableCenteredContainer from "../components/ScrollableCenteredContainer";

const width = Utils.getStyle(600, "100%");
const justifyContent = Utils.getStyle("center", "flex-start");

interface SignUpFieldSchema {
  label: string,
  placeholder: string,
  inputType: 'text' | 'password',
  helperText: string
}

const signUpFieldsDetails: SignUpFieldSchema[] = [{
  label: "User name",
  placeholder: "Type your user name",
  inputType: "text",
  helperText: "This will be your main name reference"
}, {
  label: "Email",
  placeholder: "Type your email",
  inputType: "text",
  helperText: "Your email address"
}, {
  label: "Password",
  placeholder: "Type your password",
  inputType: "password",
  helperText: "Your email address"
}
]

const SignUp: React.FC<NativeStackScreenProps<AuthenticationStackParamList>> = ({ route, navigation }) => {
  return (
    <ScrollableCenteredContainer>
      <Heading my="5">Basic information about you</Heading>
      <>
        {
          signUpFieldsDetails.map((signUpFieldsDetail, index) =>
            <FormControl key={index}>
              <Stack mx="4">
                <FormControl.Label>{signUpFieldsDetail.label}</FormControl.Label>
                <Input type={signUpFieldsDetail.inputType} placeholder={signUpFieldsDetail.placeholder} size="xl" />
                <FormControl.HelperText>{signUpFieldsDetail.helperText}</FormControl.HelperText>
              </Stack>
            </FormControl>)
        }
      </>
      <Button
        width="90%"
        variant="solid"
      >Sign up</Button>
    </ScrollableCenteredContainer>
  );
}

export default SignUp;