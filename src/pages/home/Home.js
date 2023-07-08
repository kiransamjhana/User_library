import React, { useState } from "react";

import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { useSelector } from "react-redux";
import { CustomCarousel } from "../../components/carousel/CustomCarousel";
import { CustomCard } from "../../components/customCard/CustomCard";
import { Row, Col, Form, Container } from "react-bootstrap";
import { useEffect } from "react";
const Home = () => {
  const [display, setDisplay] = useState([]);
  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    setDisplay(books);
  }, [books]);
  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filteredBook = books.filter((item) =>
      item.title.tolowerCase().includes(value.tolowerCase())
    );
    setDisplay(filteredBook);
  };

  console.log(books);
  return (
    <div>
      <Header />
      <section className="main">
        <CustomCarousel />

        <Container className="mt-5">
          <Row>
            <Col>
              <div className="d-flex justify-content-between">
                <div className="left">{display.length} books found</div>
                <div className="right">
                  <Form.Control
                    onChange={handleOnSearch}
                    placeholder="serach book by name"
                  />
                </div>
              </div>
              <hr />
              <div className="book-list d-flex justify-content-between flex-wrap gap-3 mt-5">
                {display?.map((item) => (
                  <CustomCard key={item._id} {...item} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
