import React from "react";

const Contenido = () => {
  return (
    <div className="content-container w-100 d-flex justify-content-center  justify-content-between align-items-center">
      <img
        src="https://images.pexels.com/photos/1251720/pexels-photo-1251720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="w-50"
      />

      <div className="d-flex flex-column align-items-center">
        <h1>Descubre el arte de Tucumán</h1>
        <div className="btn btn-warning w-50">Descubrir</div>
      </div>
    </div>
  );
};

export default Contenido;
