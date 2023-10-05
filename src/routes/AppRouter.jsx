import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/Root";
import HomePage from "../components/pages/Home/HomePage";
import LoginPage from "../components/pages/Auth/LoginPage";
import RegisterPage from "../components/pages/Auth/RegisterPage";
import ErrorPage from "../components/pages/Error/ErrorPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);

export default AppRouter;
