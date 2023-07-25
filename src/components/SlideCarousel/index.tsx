import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ClassNames } from "@emotion/react";
import ArrowNext from "../../assets/Icon/SliderNext.svg";
import ArrowPrevious from "../../assets/Icon/SliderPrevious.svg";
import { max } from "lodash";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const BlackFridayData = [
  {
    id: 1,
    cardImage: "/FridayCard/Fri1.svg",
    cardDiscount: "Up to 60% off",
    cardType: "Business Cards",
  },
  {
    id: 2,
    cardImage: "/FridayCard/Fri2.svg",
    cardDiscount: "Up to 60% off",
    cardType: "Envelopes",
  },
  {
    id: 3,
    cardImage: "/FridayCard/Fri3.svg",
    cardDiscount: "Up to 60% off",
    cardType: "Brochure",
  },
  {
    id: 4,
    cardImage: "/FridayCard/Fri4.svg",
    cardDiscount: "Up to 60% off",
    cardType: "Banners",
  },
  {
    id: 5,
    cardImage: "/FridayCard/Fri5.svg",
    cardDiscount: "Up to 60% off",
    cardType: "Postcards",
  },
  {
    id: 6,
    cardImage: "/FridayCard/Fri6.svg",
    cardDiscount: "Up to 60% off",
    cardType: "Catalogs",
  },
];
const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group">
      <Button
        className={currentSlide === 0 ? "disable" : "customprevios"}
        onClick={() => previous()}
      >
        <img src={ArrowPrevious} alt="arrow" />
      </Button>
      <Button
        className={currentSlide === max ? "disables" : "customnext"}
        onClick={() => next()}
      >
        <img src={ArrowNext} alt="arrow" />
      </Button>
    </div>
  );
};
const SlideCarousel = () => {
  return (
    <div className="black-friday-sale p-4 mt-4">
      <h6 className="black-friday-title">Shop early Black Friday deals</h6>
      <div className="friday-sale-cards">
        <Row>
          <Carousel
            responsive={responsive}
            arrows={false}
            customButtonGroup={<ButtonGroup />}
          >
            {BlackFridayData.map((item, index) => {
              return (
                <>
                  <Col lg={2}>
                    <div className="card">
                      <div className="image-wrapper">
                        <img src={item.cardImage} alt="card" />
                      </div>
                      <div className="card-discount">{item.cardDiscount}</div>
                    </div>
                    <div className="card-types d-flex mt-2">
                      <Link to="#" className="card-type-link">
                        {item.cardType}
                      </Link>
                      {/* <img
                    src={ArrowIcon}
                    alt="arrow-icon"
                    className="arrow-icon ms-2"
                  /> */}
                    </div>
                  </Col>
                </>
              );
            })}
          </Carousel>
        </Row>
      </div>
    </div>
  );
};

export default SlideCarousel;
