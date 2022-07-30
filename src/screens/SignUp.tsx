import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthenticationStackParamList } from "../routes/Authentication";
import { Text } from "native-base";

const SignUp: React.FC<NativeStackScreenProps<AuthenticationStackParamList>> = ({route, navigation}) => {
  return (
    <Text>This is a text</Text>
  );
}

export default SignUp;