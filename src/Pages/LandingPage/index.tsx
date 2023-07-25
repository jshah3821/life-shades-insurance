import React, { useState } from "react";
import classes from "./LandingPage.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import bannerImg from "../../assets/images/Background/banner_img.webp";
import { svgSectionData } from "../../helpers/storage";
import TestimonialCard from "../../components/TestimonialCard";
import { ListGroupItem } from "react-bootstrap";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const LandingPage = () => {
  const [svgMouseOverIndex, setSvgMouseOverIndex] = useState(NaN);
  return (
    <React.Fragment>
      <div className={classes.landing_page_main}>
        <div className={classes.bannerSection}>
          <LazyLoadImage
            width="100%"
            height="500px"
            src={bannerImg}
            alt="ins_banner"
          />
        </div>
        <div className={classes.ourServices}>
          <h2>Our Services</h2>
          <div className={classes.svgSection}>
            {svgSectionData.map((data, index) => {
              return (
                <div
                  key={`${index}-svg`}
                  onMouseOver={() => setSvgMouseOverIndex(index)}
                  onMouseLeave={() => setSvgMouseOverIndex(NaN)}
                >
                  <LazyLoadImage
                    width="100px"
                    height="100px"
                    src={index === svgMouseOverIndex ? data.white : data.brown}
                    alt="ins_banner"
                  />
                  <h3>{data.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.testimonial}>
          <h2>Our Testimonials</h2>
          <TestimonialCard
            src={bannerImg}
            description={
              "abcdefghijklmnmnfnvngrnbignviugnvuignivniuvniuvnrguivibviviunuivnguinvuinvuinvuinvuinviunuivnivirviuuv"
            }
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
