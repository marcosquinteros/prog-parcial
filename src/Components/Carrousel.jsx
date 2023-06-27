import Carousel from "react-bootstrap/Carousel";

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://live.staticflickr.com/65535/53004493245_2ebba23be4_o.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://live.staticflickr.com/65535/53004493220_68a26f10c3_o.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://live.staticflickr.com/65535/53004593013_ed83cd2233_o.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
