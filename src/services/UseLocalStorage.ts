import { User } from "../types/Types";

export const setLocalStorage = (data: User) => {
  const setUser = localStorage.setItem("user", JSON.stringify(data));
  return setUser;
};

export const getLocalStorage = (key: string = "user") => {
  const getUser = JSON.parse(localStorage.getItem(key) || "");
  return getUser;
};
