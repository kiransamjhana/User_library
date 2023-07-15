import React, { useState } from "react";
import { CustomInput } from "../custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

export const ReviewForm = ({ selectedReview }) => {
  const [form, setForm] = useState({ status: "inactive" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    const handleOnSubmit = (e) => {
      e.preventDefault();
    };
  };
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <CustomInput
          label="Title"
          name="title"
          placeholder="Best book  ever"
          onchange="handleOnChange"
        />

        <Form.Group className="mb-3">
          <Form.Label>Leave start</Form.Label>

          <div className="fs-3">
            <label htmlFor="s1">
              <AiFillStar />
            </label>
            <input
              value="1"
              onChange={handleOnChange}
              type="radio"
              name="star"
              id="s1"
            />

            <label htmlFor="s2">
              <AiFillStar />
            </label>
            <input
              value="2"
              onChange={handleOnChange}
              type="radio"
              name="star"
              id="s2"
            />

            <label htmlFor="s3">
              <AiFillStar />
            </label>
            <input
              value="3"
              onChange={handleOnChange}
              type="radio"
              name="star"
              id="s3"
            />

            <label htmlFor="s4">
              <AiFillStar />
            </label>
            <input
              value="4"
              onChange={handleOnChange}
              type="radio"
              name="star"
              id="s4"
            />

            <label htmlFor="s5">
              <AiFillStar />
            </label>
            <input
              value="5"
              onChange={handleOnChange}
              type="radio"
              name="star"
              id="s5"
            />
          </div>
        </Form.Group>

        <CustomInput
          label="Review Message"
          name="message"
          as="textarea"
          rows="5"
          placeholder="Best book  ever, the way it is written and deliver the value"
        />

        <div className="d-grid">
          <Button variant="success">Submit Review</Button>
        </div>
      </Form>
    </div>
  );
};
