import React from "react";
import { Header } from "../../layout/Header";
import { Footer } from "../../layout/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SignUp = () => {
  const inputs = [
    {
      label: "First Name",
      name: "fname",
      required: true,
      placeholder: "sam",
      text: "string",
    },
    {
      label: "Phone Number",
      name: "fname",
      required: true,
      placeholder: "sam",
      text: "string",
    },
    {
      label: "Last Name",
      name: "fname",
      required: true,
      placeholder: "sam",
      text: "string",
    },
    {
      label: "Address",
      name: "address",
      required: true,
      placeholder: "king street",
      text: "string",
    },
  ];
  return (
    <div>
      <Header />
      <section className="main">
        <Form className="m-5 p-5 border shadow-lg">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <div className="d-grid">
            {" "}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </section>

      <Footer />
    </div>
  );
};
