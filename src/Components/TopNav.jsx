import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-2">
      <Navbar.Brand href="">My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/home" className="mx-3 text-decoration-none">
            {" "}
            Home
          </Link>
          <Link to="/" className="mx-3 text-decoration-none">
            {" "}
            Login
          </Link>
          <Link to="/post" className="mx-3 text-decoration-none">
            {" "}
            Create Post
          </Link>
          <Link to="/logout" className="mx-3 text-decoration-none">
            {" "}
            Logout
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
