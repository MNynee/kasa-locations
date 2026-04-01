import React from "react";
import '../../main.css';

const Carousel = ({ accomodation }) => {
  return (
    <section className="carousel">
      {accomodation.pictures.map((picture, index) => (
        <img key={`${accomodation.id}-${index}`} src={picture} alt={`Picture ${index + 1}`} className="carousel__img" />
      ))}
      <img src="../../src/assets/arrow-left.svg" alt="Previous photo" className="carousel__arrow left" />
      <img src="../../src/assets/arrow-right.svg" alt="Next photo" className="carousel__arrow right" />
    </section>
  );
};

export default Carousel;
