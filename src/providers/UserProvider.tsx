import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import React from "react";
import { auth } from "../firebase-config";
import { BaseProps, UserDetails } from "../interfaces";

interface IUserContext {
  signIn: (user: UserDetails) => Promise<UserCredential>
}

const UserContext: React.Context<IUserContext | undefined> = React.createContext<IUserContext | undefined>(undefined);

const UserProvider: React.FC<BaseProps> = ({ children }) => {

  const signIn = async (userDetails: UserDetails): Promise<UserCredential> => {
    return await createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password);
  }

  return (
    <UserContext.Provider
      value={{ signIn }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser(): IUserContext {
  const user = React.useContext(UserContext);
  if (!user) {
    throw new Error("Calling 'useUser()' outside of of UserProvider?");
  }
  return user;
}

export { UserProvider, useUser };