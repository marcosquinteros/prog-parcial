import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen]= useState(false);
  const buttonLabel = sidebarOpen ? 'Cerrar' : 'Abrir';

  const handleClick = () =>{
    setSidebarOpen(!sidebarOpen)
  }


  return(
    <div className="">
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <button onClick={handleClick} className="side-button">{buttonLabel}</button>
            <Link to="/" className="side-link">
              Inicio
            </Link>
            <Link to="/Nosotros" className="side-link">
              Nosotros
            </Link>
            <Link to="/Login" className="side-link">
              Login
            </Link>
            <Link to="/Register" className="side-link">
              Register
            </Link>
      </div>
    </div>
  );
}

export default Sidebar;
