import "./Header.scss";

const Header = ({ title }) => {
  return (
    <header>
      <div className="container">
        <div className="content">
          <h1 className="title">{title}</h1>
          <p className="text">
            Proyecto para mostrar personajes de la famosa serie Rick y Morty
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
