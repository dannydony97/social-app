
export interface BaseProps {
  children?: JSX.Element | JSX.Element[]
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserSchema {
  name: string;
}

export type UserDetails = UserCredentials & UserSchema;