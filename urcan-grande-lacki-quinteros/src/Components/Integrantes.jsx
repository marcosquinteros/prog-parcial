import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Comentarios from "./Comentarios";

const grupo = [
  {
    id: 0,
    name: "Paul Urcan",
    age: 21,
    img: "https://live.staticflickr.com/65535/52927864826_5ac1500a6c_o.jpg",
    github: "https://github.com/PaulUrcan",
  },
  {
    id: 1,
    name: "Matias Grande",
    age: 20,
    img: "https://live.staticflickr.com/65535/52927864911_af121a8c82_o.jpg",
    github: "https://github.com/BigMatias",
  },
  {
    id: 2,
    name: "Santiago Lacki",
    age: 25,
    img: "https://live.staticflickr.com/65535/52928312203_b14916f494_o.jpg",
    github: "https://github.com/SantiagoLacki",
  },
  {
    id: 3,
    name: "Marcos Quinteros",
    age: 19,
    img: "https://live.staticflickr.com/65535/52927279787_929b65e330_o.jpg",
    github: "https://github.com/mwarcos",
  },
];
const Integrantes = () => {
  return (
    <Row className="mt-5 mx-5">
      <Col lg={6} md={12} className="d-flex flex-column">
        <div className="contenedor-info p-5  m-1">
          <h1 className="nosotros-text">Nuestra historia</h1>
          <hr className="linea-separadora" />
          <p className="desc-text">
            Somos un equipo apasionado de jóvenes programadores que ofrece una
            plataforma en línea para la venta de arte generado por IA. Nuestro
            objetivo es brindar una experiencia única y accesible a los amantes
            del arte, ofreciendo obras originales y únicas creadas por
            algoritmos inteligentes. Nos esforzamos por proporcionar una
            experiencia de compra sin complicaciones y ser parte de la
            emocionante travesía artística impulsada por la inteligencia
            artificial.
          </p>
        </div>
        <Comentarios />
      </Col>
      <Col
        lg={6}
        md={12}
        className="d-flex justify-content-center gap-3 flex-wrap"
      >
        {grupo.map((integrante) => (
          // <Col key={integrante.id}>
          <Card className="mt-3 ">
            <Card.Img src={integrante.img} />
            <Card.Body>
              <Card.Title>
                <div className="d-flex align-items-center  gap-5">
                  {integrante.name}
                  <div className="px-3">
                    <a href={integrante.github}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card.Title>
            </Card.Body>
          </Card>
          // {/* </Col> */}
        ))}
      </Col>
    </Row>
  );
};

export default Integrantes;
