import React from "react";

const Carousel = ({ accomodation }) => {
  return (
    <section className="carousel">
      {accomodation.pictures.map((picture, index) => (
        <img src={`${picture}[${index}]`} alt={`Picture ${index + 1}`} />
      ))}
    </section>
  );
};

export default Carousel;
