import React from "react";

const grupo = [
  {
    id: 0,
    name: "Paul Urcan",
    age: 21,
    img: "https://live.staticflickr.com/65535/52927864826_5ac1500a6c_o.jpg",
  },
  {
    id: 1,
    name: "Matias Grande",
    age: 20,
    img: "https://live.staticflickr.com/65535/52927864911_af121a8c82_o.jpg",
  },
  {
    id: 2,
    name: "Santiago Lacki",
    age: 25,
    img: "https://live.staticflickr.com/65535/52928312203_b14916f494_o.jpg",
  },
  {
    id: 3,
    name: "Marcos Quinteros",
    age: 19,
    img: "https://live.staticflickr.com/65535/52927279787_929b65e330_o.jpg",
  },
];
const Integrantes = () => {
  return (
    <div>
      <h1>¿Quienes somos?</h1>
      <div className="cards d-flex">
        {grupo.map((integrante) => (
          <div className="card-container ">
            <img
              src={integrante.img}
              alt={integrante.name}
              width="280px"
              height="280px"
            />
            <h2 className="text-center">{integrante.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrantes;
