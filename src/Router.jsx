import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Testimonials from "./pages/Testimonials";
import ErrorPage from "./pages/ErrorPage";
import Update from "./pages/Update";
import Create_Post from "./pages/Create_Post";
import Tiny_MCE from "./contents/Tiny_MCE";
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
    path: "update",
    element: <Update />,
  },

  {
    path: "logout",
    element: <Testimonials />,
  },
  {
    path: "new_post",
    element: <Create_Post />,
  },
  // {
  //   path: "new_post",
  //   element: <Tiny_MCE />,
  // },
  { path: "products/:productId", element: <Home /> },
  { path: "*", element: <ErrorPage /> },
]);

export default router;
