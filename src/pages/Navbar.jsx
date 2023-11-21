import NavElmnt from "../contents/NavElmnt";
import Button from "../contents/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authReducer";

const Navbar = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-emerald-100 bg-gradient-to-r from-emerald-100 to-emerald-200     py-5">
      <div className="container  px-2 md:px-7  mx-auto    flex justify-between items-center">
        <NavLink to="/">
          <h1 className="flex items-start space-x-1">
            <span className="text-black text-xl font-bold ">Author</span>
            <span className="text-orange-600 text-xl font-bold ">Zone</span>
          </h1>
        </NavLink>

        <nav className="lg:flex hidden items-center space-x-30">
          <ul className="lg:flex hidden items-center space-x-30">
            <NavElmnt onClick={closeMenu}>
              <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "notActive")} end>
                Home
              </NavLink>
            </NavElmnt>
            {authState.isLoggedIn && <p>Hello {authState.firstName}!</p>}
            {authState.isLoggedIn && (
              <NavElmnt onClick={closeMenu}>
                <NavLink to="/new_post" className={({ isActive }) => (isActive ? "underline" : "notActive")}>
                  Create a new post
                </NavLink>
              </NavElmnt>
            )}
          </ul>

          {!authState.isLoggedIn && (
            <NavLink to="/login" className={({ isActive }) => (isActive ? "underline" : "notActive")}>
              <Button text="Login" hoverBG="emerald" />
            </NavLink>
          )}
          {!authState.isLoggedIn && (
            <NavLink to="/signup" className={({ isActive }) => (isActive ? "underline" : "notActive")}>
              <Button text="Sign Up" color="emerald" />
            </NavLink>
          )}

          {authState.isLoggedIn && (
            <NavLink
              onClick={() => {
                console.log("works");
                localStorage.removeItem("token");
                dispatch(authActions.logout());
              }}
              className={({ isActive }) => (isActive ? "underline" : "notActive")}
            >
              <Button text="Logout" hoverBG="emerald" />
            </NavLink>
          )}
        </nav>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-black text-xl focus:outline-none transition-transform transform">
            {isMenuOpen ? (
              <span>&times;</span> // "X" icon
            ) : (
              <span>&#9776;</span> // Hamburger Icon
            )}
          </button>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <nav className="lg:hidden fixed top-16 left-0 h-full w-full bg-fgreen bg-gradient-to-b from-emerald-100 to-emerald-100 ">
            <ul className=" text-center p-4 flex flex-col items-center space-y-4">
              <NavElmnt onClick={closeMenu}>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "notActive")} end>
                  Home
                </NavLink>
              </NavElmnt>
              <NavElmnt onClick={closeMenu}>
                <NavLink to="/team" className={({ isActive }) => (isActive ? "active" : "notActive")}>
                  Team
                </NavLink>
              </NavElmnt>
              <NavElmnt onClick={closeMenu}>
                <NavLink to="/service" className={({ isActive }) => (isActive ? "active" : "notActive")}>
                  Service
                </NavLink>
              </NavElmnt>
              <NavElmnt onClick={closeMenu}>
                <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "notActive")}>
                  Projects
                </NavLink>
              </NavElmnt>
              <NavElmnt onClick={closeMenu}>
                <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "active" : "notActive")}>
                  Testimonials
                </NavLink>
              </NavElmnt>

              <Button text="Login" hoverBG="green" />
              <Button text="Register" color="green" />
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
