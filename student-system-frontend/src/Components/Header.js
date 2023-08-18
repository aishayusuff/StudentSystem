import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import Icon from "./logo";

export default function Header() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <div className="brand">
        <div className="logo">
          <Icon />
        </div>
        <a href="/">
          <h2>studentSystem</h2>
        </a>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links-custom">
          <Nav.Link className="nav-link-custom" as={Link} to="/new-students">
            New Students
          </Nav.Link>
          <Nav.Link className="nav-link-custom" as={Link} to="/student-db">
            Student DB
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
