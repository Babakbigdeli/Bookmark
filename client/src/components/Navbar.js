import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "../components/LoginButton";
import Logout from "../components/LogoutButton";

function NavBar() {
  return (
    <div className="navbar">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">BOOKMARK</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/userpage">User Page</Link>{" "}
          </Nav.Link>
        </Nav>
        <Login />
        <Logout />
      </Navbar>
    </div>
  );
}
export default NavBar;
