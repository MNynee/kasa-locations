import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="page">
      <section className="error">
        <h1 className="error__title">404</h1>
        <p className="error__message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="error__link">
          Retourner sur la page d'accueil
        </Link>
      </section>
    </div>
  );
};

export default Error;
