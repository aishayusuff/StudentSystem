import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="" as={Link} to="/">
        Student System
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/new-students">
          New Students
        </Nav.Link>
        <Nav.Link as={Link} to="/student-db">
          Student DB
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
