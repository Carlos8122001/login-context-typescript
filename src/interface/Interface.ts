import { Login, User } from "../types/Types";

export interface UserProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface UserContextProps {
  setDataUser: (userAuth: User) => void;
  getUser: () => User;
  Login: (userAuth: Login) => void;
  Logout: () => void;
}
