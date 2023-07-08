import React from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

export const BookLanding = () => {
  const [_id] = useParams();
  const { books } = useSelector((state) => state.bookInfo);
  const { thumbnail, title, author, year, summary } = books.find(
    (item) => item._id === _id
  );
  return (
    <div>
      <Header />
      <section className="main">
        <Container>
          <Row>
            <Col>
              <img src={thumbnail} alt="" width="100%" />
            </Col>
            <Col>
              <h1>{title}</h1>
            </Col>
            <p>
              {" "}
              {author}- {year}
            </p>
            <p> 5 star</p>
            <p> {summary}</p>
          </Row>

          <Row className="mt-5">
            <Col>
              <h3> Reviews</h3>
              <hr />
              <div className="review-list">
                <div className="review">
                  <div className="left-name">kiran</div>
                  <h3>Amazing Book Loved it</h3>
                  <p>
                    {" "}
                    Lorem alkdkka ldllalald
                    ffjjjdakllalalldklalkallkaldklfjoeioanhfelafehfoheaohhehrheaho
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>{" "}
        Book Landing
        {_id}
      </section>
      <Footer />
    </div>
  );
};
