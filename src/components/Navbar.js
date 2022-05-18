import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <NavLink className="fw-bold nav-link" to="/">
          To-Do list
        </NavLink>
        <div class="d-flex">
          <NavLink className="nav-link" to="/Login">
            {user ? (
              <button
                onClick={logout}
                class="btn btn-outline-success"
                type="submit"
              >
                Log Out
              </button>
            ) : (
              <button class="btn btn-outline-success" type="submit">
                Login
              </button>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
