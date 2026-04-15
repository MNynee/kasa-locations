import React, { useRef, useState, useEffect } from "react";
import '../../main.css';

const Carousel = ({ accomodation }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current && accomodation?.pictures) {
      const offset = currentIndex * 100;
      carouselRef.current.style.transform = `translateX(-${offset}%)`;
    }
  }, [currentIndex, accomodation]);

  function handlePrevious() {
    setCurrentIndex(currentIndex === 0 ? accomodation.pictures.length - 1 : i => i - 1);
  }
  
  function handleNext() {
    setCurrentIndex(currentIndex === accomodation.pictures.length - 1 ? 0 : i => i + 1);
  }

  if (!accomodation?.pictures || accomodation.pictures.length === 0) {
    return <section className="carousel">No images available</section>;
  }

  return (
    <section className="carousel">
      <div className="carousel__container"  ref={carouselRef}>
        {accomodation.pictures.map((picture, index) => (
          <img key={`${accomodation.id}-${index}`} src={picture} alt={`Picture ${index + 1}`} className="carousel__img" />
        ))}
      </div>
      <span className="carousel__index">{currentIndex + 1}/{accomodation.pictures.length}</span>
      <img src="../../src/assets/arrow-left.svg" alt="Previous photo" className="carousel__arrow left" onClick={() => handlePrevious()} />
      <img src="../../src/assets/arrow-right.svg" alt="Next photo" className="carousel__arrow right" onClick={() => handleNext()} />
    </section>
  );
};

export default Carousel;
