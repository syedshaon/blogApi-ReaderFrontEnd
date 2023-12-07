import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
// import Team from "./pages/Team";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Testimonials from "./pages/Testimonials";
import ErrorPage from "./pages/ErrorPage";
import Update from "./pages/Update";
// import Create_Post from "./pages/Create_Post";
// import PostEdit from "./pages/PostEdit";
import { useSelector } from "react-redux";

const Router = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:postId" element={<Posts />} />
        {/* <Route path="/team" element={<Team />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/update" element={isLoggedIn ? <Update /> : <Home />} />
        {/* <Route path="/logout" element={<Testimonials />} /> */}
        {/* <Route path="/new_post" element={isLoggedIn ? <Create_Post /> : <Login />} />
        <Route path="/editpost/:postId" element={isLoggedIn ? <PostEdit /> : <Login />} /> */}
        <Route path="/products/:productId" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
