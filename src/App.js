import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Nosotros from "./Pages/Nosotros";
import Error404 from "./Pages/Error404";
import Inicio from "./Pages/Inicio";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import Products from "./Pages/Products";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Productos" element={<Products />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer pathIndex="/Inicio" pathNosotros="/Nosotros" pathError="/*" />
      </Router>
    </>
  );
}

export default App;
