import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/kQ6Vtfx/slide1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-5xl text-green-500">Modern and Updated medical instruments</h3>
            <p>We have the top class medical instruments. Our machines are imported from America and china.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/0Ykgq4z/slide2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-5xl text-green-500">Helpful and Experienced Doctors</h3>
            <p>Our doctors are dedicated and commited to give their best to patients.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/rmjnM8r/slide3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-5xl text-green-500">Imergency Department</h3>
            <p>
            Emergency Centre provides multidisciplinary emergency support 24 hours a day, 7 days a week with state-of-the-art facilities and expert trauma team, providing ventilator and life support
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
