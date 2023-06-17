import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Nosotros from "./Pages/Nosotros";
import Error404 from "./Pages/Error404";
import Inicio from "./Pages/Inicio";
import Footer from "./Layout/Footer";
import Loginp from "./Pages/Login";
import Navbar from "./Layout/Navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Loginp" element={<Loginp />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer pathIndex="/Inicio" pathNosotros="/Nosotros" pathError="/*" />
      </Router>
    </>
  );
}

export default App;
