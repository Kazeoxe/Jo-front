import HomePage from "./pages/Home/HomePage.jsx";
import Error404Page from "./pages/Error404/Error404Page.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AthletesPage from "./pages/Athletes/AthletesPage.jsx";
import MedalsPage from "./pages/Medals/MedalsPage.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//nav to component asap
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/athletes" element={<AthletesPage />} />
          <Route path="/medals" element={<MedalsPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
