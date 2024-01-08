import { useRoutes } from "react-router-dom";
import { FormLogin } from "../pages/FormLogin";
import { FormRegister } from "../pages/FormRegister";

export const CustomRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <FormLogin />,
    },

    {
      path: "/register",
      element: <FormRegister />,
    },
  ]);
};
