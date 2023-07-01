import React from "react";
import { Header } from "./Header";
import { Container } from "react-bootstrap";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const UserLayout = ({ children, title }) => {
  return (
    <div className="d-flex">
      <div className="left-menu bg-dark text-light  ">
        <div className="text-center mt-3">Admin</div>
        <hr />
        <ul>
          <li>
            <Link to="/dashbaord">Dashboard</Link>
          </li>
        </ul>
      </div>

      <div className="right-page w-100">
        <Header />

        <Container className="main">
          <h1 className="mt-2">{title}</h1>
          <hr />
          {children}
        </Container>
        <Footer />
      </div>
    </div>
  );
};
