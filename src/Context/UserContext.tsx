import { createContext } from "react";
import { UserContextProps } from "../interface/Interface";

export const UserContext = createContext<UserContextProps | null>(null);
