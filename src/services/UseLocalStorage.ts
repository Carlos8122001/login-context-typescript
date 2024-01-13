import { Login, User } from "../types/Types";

export const setLocalStorage = (data: Login | null) => {
  const setUser = localStorage.setItem("user", JSON.stringify(data));
  return setUser;
};

export const getLocalStorage = (key: string = "user"): User => {
  const getUser = JSON.parse(localStorage.getItem(key) || "");
  return getUser;
};
