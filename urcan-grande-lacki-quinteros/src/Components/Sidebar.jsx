import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Nosotros from "../Pages/Nosotros";
import Error404 from "../Pages/Error404";
import Inicio from "../Pages/Inicio";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen]= useState(false);
  const handleClick = () =>{
    setSidebarOpen(!sidebarOpen)
  }


  return(
    <div className="">
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <button onClick={handleClick} className="side-button">Abrir</button>
            <Link to="/" className="nav-button">
              Inicio
            </Link>
            <Link to="/Nosotros" className="nav-button">
              Nosotros
            </Link>
            <Link to="/Login" className="nav-button">
              Login
            </Link>
            <Link to="/Register" className="nav-button">
              Register
            </Link>
      </div>
    </div>
  );
}

export default Sidebar;
