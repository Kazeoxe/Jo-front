import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar"
import "./home.css";

function HomePage() {
  return (
    <main>
       <Navbar/>
      <section>
        <div className="poster-image">
          <div className="poster-header">
            <h3 className="poster-title anton-regular">
              <span>26 juillet - 11 août</span>
              PARIS
              <br />
              2024
            </h3>
            <div className="poster-btn-wrapper">
              <img src="paris24JoFlame.png" />
              <button type="button" className="btn-explorer">
                Explorer
                <span>
                  <ArrowForwardIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="olympic-game-wrapper">
        <h1 className="title anton-regular">Jeux Olympiques</h1>
        <h2 className="content">
          {`Les Jeux Olympiques sont la seule compétition véritablement mondiale
          et multisport. Avec plus de 200 pays participant à plus de 400
          épreuves entre les Jeux d'Été et d'Hiver, les Jeux sont le seul
          endroit où le monde se retrouve pour concourir, se sentir inspiré et
          être ensemble.`}
        </h2>
      </section>
      <section className="games-overview">
        <h2 className="title anton-regular">Analyse des jeux</h2>
        <div className="games-btn-wrapper">
      
          <Link
            to="athletes" 
            className="large btn"
            style={{ backgroundImage: "url(paris-2024.avif)" }}
          >
            <h3 className="title anton-regular">Athlètes</h3>
          </Link>
          <Link
            to="medals"
            className="small btn"
            style={{ backgroundImage: "url(paris-2024.avif)" }}
          >
            <h3 className="title anton-regular">Médaillés</h3>
          </Link>
          <Link
            to="TEST"
            className="small btn"
            style={{ backgroundImage: "url(paris-2024.avif)" }}
          >
            <h3 className="title anton-regular">TEST</h3>
          </Link>
          <Link
            to="TEST"
            className="large btn"
            style={{ backgroundImage: "url(paris-2024.avif)" }}
          >
            <h3 className="title anton-regular">TEST</h3>
          </Link>
          <Link
            to="TEST"
            className="large btn"
            style={{ backgroundImage: "url(paris-2024.avif)" }}
          >
            <h3 className="title anton-regular">TEST</h3>
          </Link>
          <Link
            to="TEST"
            className="small btn"
            style={{ backgroundImage: "url(paris-2024.avif)" }}
          >
            <h3 className="title anton-regular">TEST</h3>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
