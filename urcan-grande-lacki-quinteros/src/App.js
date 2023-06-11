import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Nosotros from "./Pages/Nosotros";
import Error404 from "./Pages/Error404";
import Inicio from "./Pages/Inicio";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Router>
        <nav className="d-flex justify-content-between p-4">
          <div className="logo px-3 gap-3 d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-85 32-158t87.5-127q55.5-54 130-84.5T489-880q79 0 150 26.5T763.5-780q53.5 47 85 111.5T880-527q0 108-63 170.5T650-294h-75q-18 0-31 14t-13 31q0 27 14.5 46t14.5 44q0 38-21 58.5T480-80Zm0-400Zm-233 26q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm126-170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm214 0q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm131 170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15ZM480-140q11 0 15.5-4.5T500-159q0-14-14.5-26T471-238q0-46 30-81t76-35h73q76 0 123-44.5T820-527q0-132-100-212.5T489-820q-146 0-247.5 98.5T140-480q0 141 99.5 240.5T480-140Z" />
            </svg>
            <h1>Unnamed</h1>
          </div>
          <div className="nav-buttons d-flex gap-1 align-items-center">
            <Link to="/" className="nav-button">
              Inicio
            </Link>
            <Link to="/Login" className="nav-button">
              Login
            </Link>
            <Link to="/Register" className="nav-button">
              Register
            </Link>
            <Link to="/Nosotros" className="nav-button">
              Nosotros
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>

        <div className="">
          <Footer path="/Nosotros" />
        </div>
      </Router>
    </>
  );
}

export default App;
