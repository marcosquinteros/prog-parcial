import React from "react";
import { Col, Row, Card } from "react-bootstrap";
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
    <Row className="mt-5 mx-5 d-flex justify-content-center">
      {grupo.map((integrante) => (
        <Col md={6} lg={3} className="w-auto">
          <Card>
            <Card.Img src={integrante.img} />
            <Card.Body>
              <Card.Title>{integrante.name}</Card.Title>
              {/* <Card.Footer>
                <i className="bi bi-heart"></i>
                <i className="bi bi-share"></i>
              </Card.Footer> */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Integrantes;
