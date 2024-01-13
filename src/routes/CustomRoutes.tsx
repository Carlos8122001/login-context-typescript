import { useRoutes } from "react-router-dom";
import { FormLogin } from "../pages/FormLogin";
import { FormRegister } from "../pages/FormRegister";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { UserContextProps } from "../interface/Interface";
import { Dashboard } from "../pages/Dashboard";

export const CustomRoutes = () => {
  const { getUser } = useContext(UserContext) as UserContextProps;
  return useRoutes([
    {
      path: "/",
      element: getUser() === null ? <FormLogin /> : <Dashboard />,
    },

    {
      path: "/register",
      element: <FormRegister />,
    },
  ]);
};
