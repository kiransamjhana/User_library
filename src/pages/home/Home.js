import React from "react";

import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { useSelector } from "react-redux";
import { Carousel } from "../../components/carousel/Carousel";
import { CustomCard } from "../../components/customCard/CustomCard";

export const Home = () => {
  const { books } = useSelector((state) => state.bookInfo);

  return (
    <div>
      <Header />

      <section className="main">
        <Carousel />
        <div className="book-list">
          {books.map((item) => (
            <CustomCard key={item._id} {...item} />
          ))}
        </div>{" "}
      </section>
      <Footer />
    </div>
  );
};
