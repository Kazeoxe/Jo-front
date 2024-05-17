import "./medals.css";
import { Link } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../../components/NavBar";

function MedalsPage() {
  return (
    <main>
      <Navbar />
      <section className="search-medals">
        <h2 className="title anton-regular">Médaillés</h2>
        <ChakraProvider>
          <div className="select-wrapper">
            <Select placeholder="Sport">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select placeholder="Equipe">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>
        </ChakraProvider>
        <section className="result-medals">
          <div className="result-header">
            <p>Equipe</p>
            <p>Athletes</p>
            <p>Sport</p>
            <p>Médailles</p>
          </div>
          {/*  */}
          <div className="athletes-displayer">
            <div className="line"></div>
            <div className="athlete-medals-info">
              <div className="country">
                <img src="https://flagcdn.com/w320/us.png" />
                <p>CODE</p>
              </div>
              <div className="identity">
                <img src="paris-2024.avif" />
                <p>NOM PRENOM</p>
              </div>
              <p className="sport-name">SPORT</p>
              <div className="medals-group">
                <div className="medal gold">4</div>
                <div className="medal silver">2</div>
                <div className="medal bronze">6</div>
              </div>
            </div>
          </div>
          <div className="athletes-displayer">
            <div className="line"></div>
            <div className="athlete-medals-info">
              <div className="country">
                <img src="https://flagcdn.com/w320/us.png" />
                <p>CODE</p>
              </div>
              <div className="identity">
                <img src="paris-2024.avif" />
                <p>NOM PRENOM</p>
              </div>
              <p className="sport-name">SPORT</p>
              <div className="medals-group">
                <div className="medal gold">4</div>
                <div className="medal silver">2</div>
                <div className="medal bronze">6</div>
              </div>
            </div>
          </div>
          <div className="athletes-displayer">
            <div className="line"></div>
            <div className="athlete-medals-info">
              <div className="country">
                <img src="https://flagcdn.com/w320/us.png" />
                <p>CODE</p>
              </div>
              <div className="identity">
                <img src="paris-2024.avif" />
                <p>NOM PRENOM</p>
              </div>
              <p className="sport-name">SPORT</p>
              <div className="medals-group">
                <div className="medal gold">4</div>
                <div className="medal silver">2</div>
                <div className="medal bronze">6</div>
              </div>
            </div>
          </div>
          {/*  */}
        </section>
      </section>
    </main>
  );
}

export default MedalsPage;
