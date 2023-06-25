import { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductsList = (props) => {
  const [products, setProducts] = useState([]);
  const URL = "http://localhost:8000/products";

  useEffect(() => {
    axios.get(URL).then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="d-flex align-items-center flex-column">
      <h1 className="productos-text text-center p-4">Lista de produtos</h1>
      <hr className="linea-separadora w-75 " />
      <Row className="product-list d-flex gap-3 g-0 my-4 justify-content-center">
        {products.map((product) => (
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
      </Row>
    </div>
  );
};

export default ProductsList;
