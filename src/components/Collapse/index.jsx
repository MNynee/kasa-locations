import { useState } from 'react'

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="collapse">
      <div className="collapse__title">
        <h2>{title}</h2>
        <img
          src="../../src/assets/arrow.svg"
          alt="Arrow"
          className={`collapse__btn ${isOpen ? "open" : "close"}`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className={`collapse__text ${isOpen ? "open" : "close"}`}>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Collapse;
