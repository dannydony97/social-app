import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import React from "react";
import { auth } from "../firebase-config";
import { BaseProps, IUser } from "../interfaces";

interface IUserContext {
  signIn: (user: IUser) => Promise<UserCredential>
}

const UserContext: React.Context<IUserContext | undefined> = React.createContext<IUserContext | undefined>(undefined);

const UserProvider: React.FC<BaseProps> = ({ children }) => {

  const signIn = async (user: IUser): Promise<UserCredential> => {
    return await createUserWithEmailAndPassword(auth, user.email, user.password);
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
    throw new Error("Using 'useUser()' outside of of UserProvider?");
  }
  return user;
}

export { UserProvider, useUser };