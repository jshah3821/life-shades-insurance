import { Button, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowNext from "../../assets/Icon/SliderNext.svg";
import ArrowPrevious from "../../assets/Icon/SliderPrevious.svg";
import { max } from "lodash";
import TestimonialCard from "../TestimonialCard";
import { reviewData } from "../../helpers/storage";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 920 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 920, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

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
    <div style={{ width: "95%", marginLeft: "auto", marginRight: "auto" }}>
      <Carousel
        infinite
        autoPlay
        arrows={false}
        autoPlaySpeed={3000}
        responsive={responsive}
        customButtonGroup={<ButtonGroup />}
      >
        {reviewData.map((item, index) => {
          return (
            <TestimonialCard
              key={index}
              src={item?.src}
              description={item?.description}
              reviewerName={item?.reviewerName}
              reviewerDesignation={item?.reviewerDesignation}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default SlideCarousel;
