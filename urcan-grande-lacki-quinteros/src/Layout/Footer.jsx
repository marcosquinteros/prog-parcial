import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer>
      <div>
        <p className="footer-text">
          © {new Date().getFullYear()} Unnamed. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
