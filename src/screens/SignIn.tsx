import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthenticationStackParamList } from "../routes/Authentication";
import { Button, FormControl, Heading, Input, Stack, } from "native-base";
import ScrollableCenteredContainer from "../components/ScrollableCenteredContainer";
import { UserDetails } from "../interfaces";
import { useUser } from "../providers/UserProvider";

interface SignInFieldSchema {
  label: string,
  placeholder: string,
  inputType: 'text' | 'password',
  helperText: string,
  value: string
}

const signInFieldsDetails: Map<keyof UserDetails, SignInFieldSchema> = new Map([
  ['name', {
    label: "User name",
    placeholder: "Type your user name",
    inputType: "text",
    helperText: "This will be your main name reference",
    value: ''
  },], ['email', {
    label: "Email",
    placeholder: "Type your email",
    inputType: "text",
    helperText: "Your email address",
    value: ''
  }], ['password', {
    label: "Password",
    placeholder: "Type your password",
    inputType: "password",
    helperText: "At least 8 characters",
    value: ''
  }]
]);

const SignIn: React.FC<NativeStackScreenProps<AuthenticationStackParamList>> = ({ route, navigation }) => {

  const { signIn } = useUser();

  const onSignIn = async () => {
    const user: UserDetails = {
      name: '',
      email: '',
      password: ''
    }
    for(const [key, signInFieldDetails] of signInFieldsDetails) {
      user[key] = signInFieldDetails.value;
    }

    await signIn(user);
  }

  const fields: Array<JSX.Element> = [];
  for(const [key, signInFieldDetails] of signInFieldsDetails) {
    fields.push(<FormControl key={key}>
      <Stack mx="4">
        <FormControl.Label>{signInFieldDetails.label}</FormControl.Label>
        <Input
          type={signInFieldDetails.inputType}
          placeholder={signInFieldDetails.placeholder}
          size="xl"
          onChangeText={(text: string) => signInFieldDetails.value = text} />
        <FormControl.HelperText>{signInFieldDetails.helperText}</FormControl.HelperText>
      </Stack>
    </FormControl>);
  }

  return (
    <ScrollableCenteredContainer>
      <Heading my="5">Basic information about you</Heading>
      <>
      {fields}
      </>
      <Button
        width="90%"
        variant="solid"
        onPress={onSignIn}
      >Sign in</Button>
    </ScrollableCenteredContainer>
  );
}

export default SignIn;