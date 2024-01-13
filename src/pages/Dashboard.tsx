import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { UserContextProps } from "../interface/Interface";

export const Dashboard = () => {
  const { Logout } = useContext(UserContext) as UserContextProps;
  return (
    <>
      <h1> Hola! Bienvenido</h1>
      <button onClick={Logout}>Salir</button>
    </>
  );
};
