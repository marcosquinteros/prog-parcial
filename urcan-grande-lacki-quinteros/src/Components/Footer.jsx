import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="row px-5  w-100">
      <div className="col col-lg-3 col-md-6 col-sm-12">
        <h3>Navegacion</h3>
        <ul className="list-style-none">
          <li>
            <Link to={props.pathIndex}> Inicio </Link>
          </li>
          <li>
            <Link to={props.pathNosotros}> Nosotros </Link>
          </li>
          <li>
            <Link to={props.pathError}> Politicas de privacidad </Link>
          </li>
        </ul>
      </div>
      <div className="col col-lg-3 col-md-6 col-sm-12">
        <h3>Tienda</h3>
        <ul className="list-style-none">
          <li>
            <Link to={props.pathError}> Productos </Link>
          </li>
          <li>
            <Link to={props.pathError}> Envio </Link>
          </li>
          <li>
            <Link to={props.pathError}> Ofertas </Link>
          </li>
        </ul>
      </div>
      <div className="col col-lg-3 col-md-6 col-sm-12">
        <h3>Metodos de pago</h3>
        <ul className="list-style-none">
          <li>
            <Link to={props.pathError}> Visa </Link>
          </li>
          <li>
            <Link to={props.pathError}> MasterCard </Link>
          </li>
          <li>
            <Link to={props.pathError}> PayPal </Link>
          </li>
        </ul>
      </div>
      <div className="col col-lg-3 col-md-6 col-sm-12">
        <h3>Navegacion</h3>
        <ul className="list-style-none">
          <li>
            <Link to={props.pathIndex}> Inicio </Link>
          </li>
          <li>
            <Link to={props.pathNosotros}> Nosotros </Link>
          </li>
          <li>
            <Link to={props.pathIndex}> Politicas de privacidad </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
