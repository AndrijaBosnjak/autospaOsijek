import Carousel from "react-bootstrap/Carousel";

import carousel_image1 from "../../assets/carousel/carousel_image1.jpg";
import carousel_image2 from "../../assets/carousel/carousel_image2.jpg";
import carousel_image3 from "../../assets/carousel/carousel_image3.jpg";
import carousel_image4 from "../../assets/carousel/carousel_image4.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CarouselFullPage.css";

function CarouselFullPage() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={carousel_image1} class="d-block w-100" alt="Carousel 1" />
        <Carousel.Caption>
          <h1>First slide label</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel_image2} class="d-block w-100" alt="Carousel 2" />
        <Carousel.Caption>
          <h1>Second slide label</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel_image3} class="d-block w-100" alt="Carousel 3" />
        <Carousel.Caption>
          <h1>Third slide label</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel_image4} class="d-block w-100" alt="Carousel 4" />
        <Carousel.Caption>
          <h1>Third slide label</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFullPage;
