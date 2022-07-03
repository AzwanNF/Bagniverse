import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class carousel extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/banner.png"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default carousel;
