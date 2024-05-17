import "./athletes.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/NavBar";

function AthletesPage() {
  return (
    <main>
      <Navbar />
      <section className="ath-search-container">
        <div className="title  anton-regular">
          <h1>ATHLÈTES</h1>
        </div>
        <div className="search-bar">
          <form className="input-group">
            <input
              className="from-control"
              placeholder="Rechercher un athlète"
            ></input>
          </form>
        </div>
      </section>
      <section className="ath-search-results">
        <div className="container">
          <Link className="card" to="ID-athlete">
            <div className="item-athlete">
              <div className="wrapper">
                <img src="paris-2024.avif" />
                <h4 className="name-athlete">BIGNAMENOM BIGPRENOM</h4>
              </div>
              <h5 className="">CODE, Escalade Sportive</h5>
              <div className="info-athlete"></div>
            </div>
          </Link>
          <Link className="card" to="ID-athlete">
            <div className="item-athlete">
              <div className="wrapper">
                <img src="paris-2024.avif" />
                <h4 className="name-athlete">BIGNAMENOM BIGPRENOM</h4>
              </div>
              <h5 className="">CODE, Escalade Sportive</h5>
              <div className="info-athlete"></div>
            </div>
          </Link>
          <Link className="card" to="ID-athlete">
            <div className="item-athlete">
              <div className="wrapper">
                <img src="paris-2024.avif" />
                <h4 className="name-athlete">BIGNAMENOM BIGPRENOM</h4>
              </div>
              <h5 className="">CODE, Escalade Sportive</h5>
              <div className="info-athlete"></div>
            </div>
          </Link>
          <Link className="card" to="ID-athlete">
            <div className="item-athlete">
              <div className="wrapper">
                <img src="paris-2024.avif" />
                <h4 className="name-athlete">BIGNAMENOM BIGPRENOM</h4>
              </div>
              <h5 className="">CODE, Escalade Sportive</h5>
              <div className="info-athlete"></div>
            </div>
          </Link>
          <Link className="card" to="ID-athlete">
            <div className="item-athlete">
              <div className="wrapper">
                <img src="paris-2024.avif" />
                <h4 className="name-athlete">BIGNAMENOM BIGPRENOM</h4>
              </div>
              <h5 className="">CODE, Escalade Sportive</h5>
              <div className="info-athlete"></div>
            </div>
          </Link>
          <Link className="card" to="ID-athlete">
            <div className="item-athlete">
              <div className="wrapper">
                <img src="paris-2024.avif" />
                <h4 className="name-athlete">BIGNAMENOM BIGPRENOM</h4>
              </div>
              <h5 className="">CODE, Escalade Sportive</h5>
              <div className="info-athlete"></div>
            </div>
          </Link>
          <Link className="card" to="ID-athlete">
            <div className="item-athlete">
              <div className="wrapper">
                <img src="paris-2024.avif" />
                <h4 className="name-athlete">BIGNAMENOM BIGPRENOM</h4>
              </div>
              <h5 className="">CODE, Escalade Sportive</h5>
              <div className="info-athlete"></div>
            </div>
          </Link>
          <Link className="card" to="ID-athlete">
            <div className="item-athlete">
              <div className="wrapper">
                <img src="paris-2024.avif" />
                <h4 className="name-athlete">BIGNAMENOM BIGPRENOM</h4>
              </div>
              <h5 className="">CODE, Escalade Sportive</h5>
              <div className="info-athlete"></div>
            </div>
          </Link>
          <Link className="card" to="ID-athlete">
            <div className="item-athlete">
              <div className="wrapper">
                <img src="paris-2024.avif" />
                <h4 className="name-athlete">BIGNAMENOM BIGPRENOM</h4>
              </div>
              <h5 className="">CODE, Escalade Sportive</h5>
              <div className="info-athlete"></div>
            </div>
          </Link>
          <Link className="card" to="ID-athlete">
            <div className="item-athlete">
              <div className="wrapper">
                <img src="paris-2024.avif" />
                <h4 className="name-athlete">BIGNAMENOM BIGPRENOM</h4>
              </div>
              <h5 className="">CODE, Escalade Sportive</h5>
              <div className="info-athlete"></div>
            </div>
          </Link>
          <Link className="card" to="ID-athlete">
            <div className="item-athlete">
              <div className="wrapper">
                <img src="paris-2024.avif" />
                <h4 className="name-athlete">BIGNAMENOM BIGPRENOM</h4>
              </div>
              <h5 className="">CODE, Escalade Sportive</h5>
              <div className="info-athlete"></div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AthletesPage;
