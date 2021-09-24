import React, { useState } from "react";
import { Navbar, Button } from "react-bootstrap";
import { useAuth } from "../context/appContext";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  const { currentUser, logOut } = useAuth();
  const history = useHistory();
  const [error, setError] = useState("");
  const handleLogOut = async () => {
    setError("");
    try {
      await logOut();
      history.push("/");
    } catch (error) {
      setError("Failed to log out");
    }
  };
  return (
    <div className="nav-outer">
      <Navbar expand="lg" className="nav-inner">
        <Navbar.Brand
          href="/"
          className="text-light"
          style={{ fontSize: "25px" }}
        >
          Anime Website
        </Navbar.Brand>
        {!currentUser && (
          <ul className="nav__links">
            <Link
              to="/login"
              className="text-light"
              style={{ textDecoration: "none", fontSize: "17px" }}
            >
              LogIn
            </Link>

            <Link
              to="/signup"
              className="text-light"
              style={{ textDecoration: "none", fontSize: "17px" }}
            >
              SignUp
            </Link>
          </ul>
        )}

        {currentUser ? (
          <div className="user-info-bar">
            <Navbar.Text className="text-light">
              Welcome, <br />
              {currentUser.email}
            </Navbar.Text>
            <Button onClick={handleLogOut}>LogOut</Button>
          </div>
        ) : (
          ""
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;
