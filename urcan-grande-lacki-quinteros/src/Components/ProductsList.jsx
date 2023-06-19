import { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

const ProductsList = () => {
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
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3> ${product.price}</h3>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductsList;
