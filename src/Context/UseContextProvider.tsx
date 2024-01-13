import { UserContext } from "./UserContext";
import { UserProviderProps } from "../interface/Interface";
import { useState } from "react";
import { Login, User } from "../types/Types";
import { getLocalStorage, setLocalStorage } from "../services/UseLocalStorage";

export const UseContextProvider = ({ children }: UserProviderProps) => {
  const [, setDataUser] = useState<Login | null>();

  const getUser = (): User => {
    return getLocalStorage();
  };

  const Login = (data: Login): void => {
    setLocalStorage(data);
    setDataUser(data);
  };

  const Logout = () => {
    setLocalStorage(null);
    setDataUser(null);
  };
  return (
    <UserContext.Provider value={{ getUser, Login, setDataUser, Logout }}>
      {children}
    </UserContext.Provider>
  );
};
