import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layouts/Root";
import HomePage from "../components/pages/Home/HomePage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
]);

export default AppRouter;
