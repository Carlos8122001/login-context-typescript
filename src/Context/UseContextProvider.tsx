import { UserContext } from "./UserContext";
import { UserProviderProps } from "../interface/Interface";

export const UseContextProvider = ({ children }: UserProviderProps) => {
  // const setDataUser = (data: User): void => {
  //   return setLocalStorage(data);
  // };

  const getDataUser = () => {
    return console.log("User");
  };

  // const validateUser = (data: Login): void => {
  //   const dataUser = getDataUser();
  //   if (dataUser.email === "" || dataUser.password === "") {
  //     console.log("The user could not be found");
  //   } else if (
  //     data.email !== dataUser.email ||
  //     data.password !== dataUser.password
  //   ) {
  //     console.log("Incorrect username / password");
  //   } else {
  //     console.log("Congratulations successful login");
  //   }
  // };
  return (
    <UserContext.Provider value={{ getDataUser }}>
      {children}
    </UserContext.Provider>
  );
};
