import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Nosotros from "./Pages/Nosotros";
import Error404 from "./Pages/Error404";
import Inicio from "./Pages/Inicio";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen]= useState(false);
  const handleClick = () =>{
    setSidebarOpen(!sidebarOpen)
  }


  return(
    <div>
      <button onClick={handleClick} className="side-button">Abrir</button>
      <div className={sidebarOpen ? 'sidebar' : 'sidebarOpen'}>
        <Router>
          <div>
          <Link to="/" className="nav-button">
              Inicio
            </Link>
            <Link to="/Nosotros" className="nav-button">
              Nosotros
            </Link>
          </div>
          <div className="nav-buttons d-flex px-5 gap-1 align-items-center">
            <Link to="/Login" className="nav-button">
              Login
            </Link>
            <Link to="/Register" className="nav-button">
              Register
            </Link>
          </div>
          <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        </Router>
      </div>
      
    </div>
  );
}

export default Sidebar;
