import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Header } from "../../layout/Header";
import { Footer } from "../../layout/Footer";

import { BiSolidUserDetail } from "react-icons/bi";
import { signInAdminAction } from "./userAction";
import { CustomInput } from "../../custom-input/CustomInput";

import { useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(signInAdminAction(form));
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "Sam@smit.com",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "******",
      type: "password",
      minLength: "6",
    },
  ];

  console.log(form);
  return (
    <div>
      <Header />
      <section className="main">
        <Form className="m-5 p-5 border shadow-lg" onSubmit={handleOnSubmit}>
          <h1>
            <BiSolidUserDetail />
            Welcome Admins Login Now
          </h1>
          <hr />

          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
