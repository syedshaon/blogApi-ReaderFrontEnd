import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Testimonials from "./pages/Testimonials";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "team",
    element: <Team />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "logout",
    element: <Testimonials />,
  },
  { path: "products/:productId", element: <Home /> },
  { path: "*", element: <ErrorPage /> },
]);

export default router;
