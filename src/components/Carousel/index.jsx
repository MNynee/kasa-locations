import React, { useRef, useState, useEffect } from "react";
import '../../main.css';

const Carousel = ({ accomodation }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current && accomodation?.pictures) {
      const offset = (currentIndex % accomodation.pictures.length) * 106;
      carouselRef.current.style.transform = `translateX(-${offset}%)`;
    }
  }, [currentIndex, accomodation]);

  function handlePrevious() {
    currentIndex === 0 ? setCurrentIndex(accomodation.pictures.length - 1) : setCurrentIndex(prev => prev - 1);
  }
  
  function handleNext() {
    setCurrentIndex(prev => prev + 1);
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
      <img src="../../src/assets/arrow-left.svg" alt="Previous photo" className="carousel__arrow left" onClick={() => handlePrevious()} />
      <img src="../../src/assets/arrow-right.svg" alt="Next photo" className="carousel__arrow right" onClick={() => handleNext()} />
    </section>
  );
};

export default Carousel;
