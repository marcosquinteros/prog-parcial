import React from "react";
import Integrantes from "../Components/Integrantes";
import Comentarios from "../Components/Comentarios";

const Nosotros = () => {
  return (
    <div className="w-100">
      <main className="container">
        <h1 className="text-center pt-5 nosotros-text title">
          ¿Quienes somos?
        </h1>
        <Integrantes />
        <hr />
        <Comentarios />
        <hr />
      </main>
    </div>
  );
};

export default Nosotros;
