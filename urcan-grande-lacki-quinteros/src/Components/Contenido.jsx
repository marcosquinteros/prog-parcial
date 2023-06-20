import React from "react";
import { Link } from "react-router-dom";

const Contenido = () => {
  return (
    <div className="container g-0 ">
      <div className="container-top">
        <div className="container-title">
          <h1>Titulo</h1>
        </div>
        <div className="carrousel"></div>
      </div>
      <div className="container-bottom">
        <div className="container-art"></div>
        <div className="container-art"></div>
        <div className="container-art"></div>
        <div className="container-art"></div>
        <div className="container-art"></div>
        <div className="container-art"></div>
      </div>
      <Link to="./Productos" className="button-verproductos w-50">
        Ver todos los productos
      </Link>
    </div>
  );
};

export default Contenido;
