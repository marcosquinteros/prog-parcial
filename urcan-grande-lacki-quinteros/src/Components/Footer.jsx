import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="container-fluid h-50 d-flex justify-content-between bg-warning ">
      <h3>©2023 Marquitos S.A.</h3>
      <div className="d-flex gap-5 px-5">
        <h3>
          <Link to={props.path}>Contacto</Link>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
