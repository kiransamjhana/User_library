import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillHome, AiFillDashboard } from "react-icons/ai";
import { GiEntryDoor } from "react-icons/gi";
import { ImExit } from "react-icons/im";
export const Header = () => {
  return (
    <Navbar expand="md" className="bg-dark-tertiary">
      <Container>
        <Navbar.Brand href="#home">Library Manangement</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              {" "}
              <AiFillHome className="fs=3" />
              Home
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <AiFillDashboard />
              Dashboar
            </Nav.Link>

            <Nav.Link href="#link">
              {" "}
              <GiEntryDoor />
              signOUt
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <GiEntryDoor />
              Sign in
            </Nav.Link>
            <Nav.Link href="#link">
              {" "}
              <ImExit />
              signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
