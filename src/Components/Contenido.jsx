import React from "react";
import { Link } from "react-router-dom";
import Carrousel from "./Carrousel";
import Ofertas from "./Ofertas";

const Contenido = () => {
  return (
    <div className="mb-5 g-0">
      <div className="container-top">
        <Carrousel />
      </div>
      <h2 className="offers-tittle">Ofertas</h2>
      <div className="">
        <Ofertas pathError="/*" />
      </div>
      <div className="ver-products w-100 d-flex justify-content-center mt-5">
        <Link to="./Productos" className="button-verproductos ">
          Ver todos los productos
        </Link>
      </div>
    </div>
  );
};

export default Contenido;
