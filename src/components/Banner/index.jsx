const Banner = ({ isHome }) => {
  return (
    <section className={`banner ${isHome ? "homepage" : "about"}`}>
      {isHome && (
        <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
      )}
    </section>
  );
};

export default Banner;
