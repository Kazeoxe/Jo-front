import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="logo_color.svg" />
        </div>
        <div className="nav-categories">
          <Link to="/">
            <h3 className="">Jeux Olympics</h3>
          </Link>
          <Link to="/athletes">
            <h3 className="">Athlètes</h3>
          </Link>
          <Link to="/sport">
            <h3 className="">Sport</h3>
          </Link>
          <a href="https://shop.olympics.com/fr/">{"Boutique"}</a>
          <a href="https://olympics.com/musee">{"Musée"}</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
