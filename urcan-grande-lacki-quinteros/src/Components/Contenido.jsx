import React from "react";

const Contenido = () => {
  return (
    <div className="content-container w-100 d-flex justify-content-center  justify-content-between align-items-center">
      <div className="row">
        <div className="col col-lg-6 col-md-12">
          <img
            src="https://images.pexels.com/photos/1251720/pexels-photo-1251720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-100"
          />
        </div>
        <div className="col col-lg-6 col-md-12 d-flex flex-column  align-items-center justify-content-center ">
          <h1 className="align-text-center">Descubre el arte de Tucumán</h1>
          <div className="btn btn-warning w-50 mt-4">Descubrir</div>
        </div>
      </div>
    </div>
  );
};

export default Contenido;
