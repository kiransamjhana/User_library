import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { AiFillDashboard, AiFillHome } from "react-icons/ai";
import { GiEntryDoor } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { persistor } from "../../store";
import { setUser } from "../../pages/signup-signin/userSlice";

export const Header = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userInfo);
  const handleOnSignOut = () => {
    // remove from Persist
    persistor.purge().then(() => {
      console.log("signed out");
    });
    //remove user for the redux

    dispatch(setUser({}));
  };
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link className="nav-link" to="/">
                  <AiFillHome /> Home
                </Link>
                <Link className="nav-link" to="/dashboard">
                  <AiFillDashboard /> Dashboard
                </Link>
                <Link className="nav-link" to="/" onClick={handleOnSignOut}>
                  <ImExit /> Sign out
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/login">
                  <GiEntryDoor />
                  Login
                </Link>
                <Link className="nav-link" to="/new-admin">
                  <ImExit /> SignUP
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
