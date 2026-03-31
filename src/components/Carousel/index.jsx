import React from "react";

const Carousel = ({ accomodation }) => {
  return (
    <section className="carousel">
      {accomodation.pictures.map((picture, index) => (
        <img src={`${picture}[${index}]`} alt={`Picture ${index + 1}`} className="carousel__img" />
      ))}
      <img src="../../assets/arrow-left.svg" alt="" className="carousel__arrow left" />
      <img src="../../assets/arrow-right.svg" alt="" className="carousel__arrow right" />
    </section>
  );
};

export default Carousel;
