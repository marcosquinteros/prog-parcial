import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Ofertas = (props) => {
  const [offers, setOffers] = useState([]);
  const URL = "http://localhost:3001/products-ofertas";

  useEffect(() => {
    axios.get(URL).then((res) => {
      console.log(res.data);
      setOffers(res.data);
    });
  }, []);

  return (
    <div className="d-flex justify-content-center gap-2 flex-wrap">
      {offers.map((product) => (
        <Col lg={3} sm={6} className="product-card" key={product.id}>
          <img src={product.url} alt={product.name} className="img-fluid" />
          <div className="product-info p-3">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="btn-comprar d-flex justify-content-between align-items-center">
              <h3> ${product.price}</h3>
              <Link to={props.pathError} className="button-comprar">
                Comprar
              </Link>
            </div>
          </div>
        </Col>
      ))}
    </div>
  );
};

export default Ofertas;
